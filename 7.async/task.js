class AlarmClock {
    constructor(){
        this.alarmCollection = [];
        this.intervalId = null;
    
    }


    addClock(time, callback) {
          

        if(time === null || callback === undefined) {
            throw new Error('Отсутствуют обязательные аргументы')
        }

        let findTime = this.alarmCollection.find(item => item.time == time) 
        if(findTime !== undefined) {
            console.warn('Уже присутствует звонок на это же время')
        
        }
                
        let obj = {
            time: time,
            callback: callback,
            canCall: true,
        }

        this.alarmCollection.push(obj);
    }

    removeClock(time) {
        this.alarmCollection = this.alarmCollection.filter(item => {
            return item.time !== time}) 
    
    }


    getCurrentFormattedTime() {
        let now = new Date();
        let hours = now.getHours()
        let minutes = now.getMinutes();
        
        if(hours < 10)
        hours = '0' + hours;

        if(minutes < 10)
        minutes = '0' + minutes;

        let nowTime = `${hours}:${minutes}`;

        return nowTime;
 
    }

    start() {

        if(this.intervalId != undefined) {
            return;
        } else {
            this.intervalId = setInterval( () => {
                this.alarmCollection.forEach((item) => {
                    if( (this.getCurrentFormattedTime() == item.time) && item.canCall == true) {
                        item.canCall = false;
                        item.callback();     
                    }
                });
           }, 1000);
        }
    }

    stop() {
        clearInterval(this.intervalId);
        this.intervalId = null;
    }

    resetAllCalls() {
        this.alarmCollection.forEach((item) => {
            item.canCall = true;
         });
    }

    clearAlarms() {
        this.stop()
        this.alarmCollection = [];

    }
}

