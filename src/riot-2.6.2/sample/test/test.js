riot.tag2('test', '<h3>{message}</h3> <ul> <li each="{techs}">{name}</li> </ul>', 'test,[riot-tag="test"],[data-is="test"]{ font-size: 2rem } test h3,[riot-tag="test"] h3,[data-is="test"] h3{ color: #444 } test ul,[riot-tag="test"] ul,[data-is="test"] ul{ color: #999 }', 'id="test"', function(opts) {
   this.message = 'Hello, Riot!';
   this.techs = [
     { name: 'HTML' },
     { name: 'JavaScript' },
     { name: 'CSS' }
   ];

   this.on('test1 test2', function(data, params) {
     console.log('test event');
     console.log(data);
     console.log(params);
   });
});
