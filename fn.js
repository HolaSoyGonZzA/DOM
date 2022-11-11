function hello(name, aaaa) {
  aaaa(name);
}

hello("Sara", function (name) {
  console.log(name);
});
