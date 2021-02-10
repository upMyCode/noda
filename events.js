const eventsEm = require('events')

// const em = new eventsEm()

// em.on('anything', data => {
//     console.log('On anything', data)
// })

// em.emit('anything', {a: 1})

class Dispatcher extends eventsEm {
    subscribe (eventName, cb) {
        console.log('Subscribe')
        this.on(eventName,cb)
    }
    dispatch(eventName, data) {
        console.log('Dispatch')
        this.emit(eventName, data)        
    }
}


const abc = new Dispatcher()

abc.subscribe('bb', data => {
    console.log(data)
})

abc.dispatch('bb', {bb: 11})