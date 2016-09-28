<test id="test">
  <h3>{ message }</h3>
 <ul>
   <li each={ techs }>{ name }</li>
 </ul>

 <script>
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
 </script>

 <style scoped>
   :scope { font-size: 2rem }
   h3 { color: #444 }
   ul { color: #999 }
 </style>
</test>
