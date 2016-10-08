riot.tag2('eachtest', '<ul> <li each="{item, i in options.list}">{item.name}</li> </ul>', '', '', function(opts) {
    this.options = {
      list: [
        {name: 'lili', age: 12},
        {name: 'mimi', age: 123},
        {name: 'jiajia', age: 23}
      ]
    };

    this.on('mount', function() {
      console.log('each mount');
    });
});
