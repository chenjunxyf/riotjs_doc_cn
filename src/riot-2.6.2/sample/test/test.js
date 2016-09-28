riot.tag2('test', '<h3 if="{2>1}">{message}</h3>', 'test,[riot-tag="test"],[data-is="test"]{ font-size: 2rem } test h3,[riot-tag="test"] h3,[data-is="test"] h3{ color: #444 } test ul,[riot-tag="test"] ul,[data-is="test"] ul{ color: #999 }', 'id="test"', function(opts) {
   this.message = 'Hello, Riot!';

   this.on('mount', function() {
     console.log('mount!!!');
   });
});
