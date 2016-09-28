<test id="test">
 <h3 if={2>1}>{ message }</h3>

 <script>
   this.message = 'Hello, Riot!';

   this.on('mount', function() {
     console.log('mount!!!');
   });
 </script>

 <style scoped>
   :scope { font-size: 2rem }
   h3 { color: #444 }
   ul { color: #999 }
 </style>
</test>
