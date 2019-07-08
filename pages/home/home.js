Page({
data:{
  name:'张展祥',
  age:18,
  students:[
    {id:1,name:'kobe',age:20},
    { id: 2, name: 'zzx', age: 20 },
    { id: 3, name: 'ycy', age: 20 },
    { id: 4, name: 'hb', age: 20 },
  ],
  count:0

},
 handBtn1(){
   this.setData({
     count:this.data.count+1
   })
 },
   handBtn2(){
     this.setData({
      count:this.data.count-1 
     }),
     console.log('点击了')
   },
handGetUser(event){
    console.log(event)
}
 
})