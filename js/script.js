//AZIONE: inizialiazzo il codice per il supporto di Vue js 
let app = new Vue({

    //AZIONE: richiamo il contenitore a cui voglio applicare Vue js 
    el: '#container',
    
    //AZIONE: assegno le var e valori
    data:{
        utenti:[
            {
                nome: 'Michele',
                avatar : 'img/avatar_1.jpg',
                memoridate: '03/02/2021 16:35:00',
                visible: true,
                conversazione : ['Devo andare a fare la spesa.'],
                messages: [
                    {
                        date: '03/02/2021 16:30:00',
                        text: 'Ciao, che fai?',
                        status: 'received',
                    },
                    {
                        date: '03/02/2021 16:30:55',
                        text: 'Sto portando il cane a fare un giro tu?',
                        status: 'sent',
                    },
                    {
                        date: '03/02/2021 16:35:00',
                        text: 'Devo andare a fare la spesa.',
                        status: 'received',
                    }
                ],
            },
            {
                nome: 'Giulia',
                avatar : 'img/avatar_6.jpg',
                memoridate: '02/02/2021 16:35:00',
                visible: true,
                conversazione : ['Ma devo andare a fare la spesa.',],
                messages: [
                    {
                        date: '02/02/2021 16:30:00',
                        text: 'Ciao come stai?',
                        status: 'received',
                    },
                    {
                        date: '02/02/2021 16:30:55',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'sent',
                    },
                    {
                        date: '02/02/2021 16:35:00',
                        text: 'Ma devo andare a fare la spesa.',
                        status: 'received',
                    }
                ],
            },
            {
                nome: 'Mario',
                avatar : 'img/avatar_3.jpg',
                memoridate: '28/01/2021 16:15:22',
                visible: true,
                conversazione : ['Ah scusa!',],
                messages: [
                    {
                        date: '28/01/2021 10:10:40',
                        text: 'La Marianna va in campagna',
                        status: 'received',
                    },
                    {
                        date: '28/01/2021 10:20:10',
                        text: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent',
                    },
                    {
                        date: '28/01/2021 16:15:22',
                        text: 'Ah scusa!',
                        status: 'received',
                    },
                ],
            },
            {
                nome: 'Luigi',
                avatar : 'img/avatar_7.jpg',
                memoridate: '10/01/2021 15:50:00',
                visible: true,
                conversazione : ['Si, ma preferirei andare al cinema',],
                messages: [
                    {
                        date: '10/01/2021 15:30:55',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent',
                    },
                    {
                        date: '10/01/2021 15:50:00',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received',
                    }
                ],
            }
        ],
        answers: ['Che fai?', 'Sta sera usciamo','Non fare tardi','Come dici tu','Ok','No','Si'],
        casellaTesto: '',
        casellaTestoCerca: '',
        counter : '',
        tempo: '',
        posizione : 0,
        finestraVisibile: 'hide',
        prov : 'indefinita',
        attesa: false,
        elemento: {
            date: '',
            text: '',
            status: 'sent',
        },
        elementoRisposta: {
            date: '',
            text: '',
            status: 'received',
        },
    },

    

    //AREA AZIONE: Area inserimento metodi da applicare al html ad un eventuale evento
    methods:{

        // AZIONE: Al click del utente scelto si apre la chat corrispodente 
        apriChat(index){
            this.posizione = index;
        },

        // AZIONE: Inserimento di un messaggio al click
        invioMessaggio(){
            if(this.casellaTesto.length >= 1){
                this.elemento.text = this.casellaTesto;
                this.counter = Math.floor(Math.random() * (7 - 0)) + 0;
                this.elementoRisposta.text = this.answers[this.counter];
                this.elemento.date = moment().format('h:mm:ss a');
                this.utenti[this.posizione].messages.push(this.elemento);
                this.utenti[this.posizione].conversazione.push(this.casellaTesto);
                this.utenti[this.posizione].memoridate = this.utenti[this.posizione].nome + ' sta scrivendo';
                this.tempo = setTimeout(this.answersUscita, 2000);
                this.casellaTesto = '';
            }
            else{
                this.casellaTesto = '';
            }
        },

        // AZIONE: Funzione temporale 
        answersUscita(){
            this.utenti[this.posizione].messages.push(this.elementoRisposta);
            this.utenti[this.posizione].conversazione.push(this.answers[this.counter]);
            this.elementoRisposta.date = moment().format('h:mm:ss a');
            this.utenti[this.posizione].memoridate = this.elementoRisposta.date;
            this.attesa = true;
        },

        // AZIONE: Filtro gli elementi in base alle lettere inserite nella text area search 
        cerca(){
            this.utenti.forEach((element) => {
                if(element.nome.includes(this.casellaTestoCerca)){
                    element.visible = true;
                }else{
                    element.visible = false;
                }
            });

        },

        // AZIONE: Al click icons freccia visualizza o scompare l'opzione cancella 
        frecciaShow(index){
            if(index == this.prov){
                this.prov = 'indefinita';
            }
            else{
                this.prov = index ;
            }
        },

        // AZIONE: Al click di cancella il messaggio selezionato viene eliminato
        cancella(index){
            this.utenti[this.posizione].messages.splice(index,1);
            if(this.utenti[this.posizione].messages == ''){
                this.utenti[this.posizione].conversazione.splice(index,1);
            }
        }

    }
    //FINE AZIONE: Area inserimento metodi da applicare al html ad un eventuale evento

});
//FINE AZIONE: inizialiazzo il codice per il supporto di vue js
