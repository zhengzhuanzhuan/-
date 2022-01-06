
  let eventPubSub ={
    // 数据缓存
    list: {},
    // 订阅
    on(event, callback){
      (this.list[event] || (this.list[event]=[])).push(callback)
      return this
    },
    // 取消订阅
    off(event, callback){
      const callbackList = this.list[event]
      if(!callbackList) return false
      // 没有传函数的时候全部清空
      if(!callback){
        callbackList = []
      }
      for(let i = 0; i<callbackList.length; i++){
        if(callbackList[i]===callback){
          callbackList.splice(i, 1)
        }
      }
      return this;
    },
    emit(event, data){
      const callbackList = this.list[event]
      if(!callbackList || !callbackList.length){
        return false
      }
      callbackList.forEach(callback=> {
        callback(data)
      })
      return this;
    }
  }
  
  const handleEventX=(e)=>{
    console.log(e, 'eventX')
  }
  const handleEventY=(e)=>{
    console.log(e, 'eventY')
  }
  eventPubSub.on('handleEventX',handleEventX)
  eventPubSub.on('handleEventX',handleEventY)
  eventPubSub.emit('handleEventX',1)
  eventPubSub.emit('handleEventX',[2, 3, 4])
  eventPubSub.off('handleEventX',handleEventX)
  eventPubSub.on('handleEventX', handleEventX).emit('handleEventX', 'test111');
  
 
