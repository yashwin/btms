import config from 'btms/config/environment';
export default function() {

  this.post('/login', () => {
    return {user_id: '1', token: 'secret'};
  });
  this.post('/check', () => {
    return {user_id: '1', token: 'secret'};
  });
  this.post('/logout', () => {
    return {};
  });
  this.get('/users/:id', 'user');
  this.get('/support-engineers/', 'support-engineer');
  this.get('/product-engineers/', 'product-engineer');
  this.get('/bugs/', 'bug');
  this.post('/support-engineer', (schema, FakeRequest) => {
    return {
      data: {
        id: '_support_' + Math.random().toString(36).substr(2, 9),
        type: 'support-engineer',
        attributes: {
          username: FakeRequest.username
        }
      }
    };
  });
  this.post('/product-engineer', (schema, FakeRequest) => {
    return {
      data: {
        id: '_product_' + Math.random().toString(36).substr(2, 9),
        type: 'product-engineer',
        attributes: {
          username: FakeRequest.username
        }
      }
    };
  });

  this.delete('/support-engineer/:id', (schema, FakeRequest) => {
   const id = FakeRequest.params.id;
   const engineersData = schema.db.supportEngineers;
   for(var i = 0; i< engineersData.length; i++) {
     if(engineersData[i].id === id) {
      engineersData.splice(i, 1);
    }
   }
   const data = {
     engineersData,
     type: "support"
   };
   return data;
  });

  this.delete('/product-engineer/:id', (schema, FakeRequest) => {
    const id = FakeRequest.params.id;
    const engineersData = schema.db.productEngineers;
    for(var i = 0; i< engineersData.length; i++) {
      if(engineersData[i].id === id) {
       engineersData.splice(i, 1);
     }
    }
    const data = {
      engineersData,
      type: "product"
    };
    return data;
  });

  this.put('/update_priority/:id', () => {
    return {};
  });

  this.put('/update_status/:id', () => {
    return {};
  });

  this.post('/bugs', (schema, FakeRequest) => {

    const data = JSON.parse(FakeRequest.requestBody);
    return {
      data: {
        id: '_bugs_' + Math.random().toString(36).substr(2, 9),
        type: 'bug',
        attributes: {
          name: data.data.attributes.name,
          description: data.data.attributes.description,
          priority: data.data.attributes.priority,
          resolved:  data.data.attributes.resolved,
        }
      }
    }
  });

}
