function input()
{
  let a=parseInt(prompt("enter the number"));
  let b=parseInt(prompt("enter the another number"));
  return [a,b];
}
function multiply(a,b)
  {
    return a*b;
  }
  function output(a,b,c)
    {
      console.log("%d * %d is %d",a,b,c);
    }
  function main()
{
  let a,b;
  [a,b]=input();
  let c = multiply(a,b);
  output(a,b,c);
}
  main();
