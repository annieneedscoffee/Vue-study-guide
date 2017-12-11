new Vue ({
  el: "#vue-app",
  data: {
    title: "Vue Study Guide",
    description: "  This is a study guide written in Vue and about Vue. To use it compare the web page to the code that created it. For example, here this text appears because of the description written in app and the reference to it in index. That works because of the Vue CDN in the script tag in index. The title styling above is because of the design file and the link to it in index.",
    myGithub: "https://github.com/annieneedscoffee",
    name: "",
    upVotes: 0,
    downVotes: 0,
    moreEvents: "https://vuejs.org/v2/guide/events.html",
  },
  methods: {
    welcome: function(info){
      return "Welcome to the Vue Study Guide!" + info;
    },
    myMethod: function(){
      return "The title of my app is " + this.title + ".";
    },
  }
});
