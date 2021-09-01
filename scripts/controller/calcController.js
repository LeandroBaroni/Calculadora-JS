class CalcController{
    constructor(){

        this._locale = 'pt-BR';
        this._displayCalcEl = document.querySelector("#display");
        this._dateEl = document.querySelector("#data");
        this._timeEl = document.querySelector("#hora");
        this._currentDate;

        this.initialize();
        this.initButtonEvents();
    }

    initialize(){
        // DOM - Document Object Model
        // BOM - Browser Object Model

        // displayCalcEl.innerHTML = "4567"
        // this._dateEl.innerHTML = "01/01/2010";

        // let hh = new Date().getHours();
        // let mm = new Date().getMinutes();
        // let ss = new Date().getSeconds();
        // this._timeEl.innerHTML = `${hh}:${mm}:${ss}`;


        // this._dateEl.innerHTML = new Date().toLocaleDateString('pt-BR');
        // this._timeEl.innerHTML = new Date().toLocaleTimeString('pt-BR');

        setInterval(()=>{
            this.setDisplayDateTime();
        }, 1000);

        // setTimeout(()=>{
        //     clearInterval(interval);
        // }, 10000);
    }

    initButtonEvents(){
        // selecao das TAGS 'g' dentro do id buttons
        let buttons = document.querySelectorAll("#buttons > g, #parts > g");

        buttons.forEach((btn, index) =>{
            this.addEventListenerAll(btn, 'click drag mouseover', e => {
                // console.log(btn);
                console.log(btn.className.baseVal.replace("btn-", ""));
            });

            this.addEventListenerAll(btn, 'mouseover mouseup, mousedown', e => {
                btn.style.cursor = "pointer";
            });
        });
    }

    addEventListenerAll(element, events, fn){
        events.split(' ').forEach(event =>{
            element.addEventListener(event, fn, false);
        });
    }

    setDisplayDateTime(){
        // this.displayDate = this.currentDate.toLocaleDateString(this._locale);
        this.displayDate = this.currentDate.toLocaleDateString(this._locale, {
            day: '2-digit',
            month: 'long',
            year: 'numeric'
        });
        this.displayTime = this.currentDate.toLocaleTimeString(this._locale);
    }

    get displayTime(){
        return this._timeEl.innerHTML;
    }

    set displayTime(value){
        this._timeEl.innerHTML = value;
    }

    get displayDate(){
        return this._dateEl.innerHTML;
    }

    set displayDate(value){
        this._dateEl.innerHTML = value;
    }

    get displayCalc(){
        return this._displayCalcEl.innerHTML;
    }

    set displayCalc(value){
        this._displayCalcEl.innerHTML = value;
    }

    get currentDate(){
        return new Date();
    }

    set currentDate(value){
        this._currentDate = value;
    }
}