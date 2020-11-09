
   let playerPoints = 0;                                                            // Ustawiamy liczbę punktów gracza
   let computerPoints = 0;                                                          // Ustawiamy liczbę punktów komputera

   const battleStart = () =>{                                                       // Start rozgrywki
       const startBattleBtn = document.querySelector('.start .btn');                // Definiujemy elementy potrzebne do wykonania funkcji
       const startScreen = document.querySelector('.start');                        // -||-
       const battlefield = document.querySelector('.battlefield');                  // -||-

       startBattleBtn.addEventListener('click', () => {                             // "nasłuch" czy kliknięto w btn rozpoczynajacy grę
           startScreen.classList.add('hide');                                       // Dodajemy klasę ukrywajacą ekran początkowy
           battlefield.classList.remove('hide');                                    // Usuwamy klasę hide ukrywajacą ekran rozgrywki
       });
   };

   battleStart();                                                                    // Wywołujemy funkcję

   //Encounter

   const battle = ()=> {
        const weapons = document.querySelectorAll('.weapons .btn');                  // Wybieramy broń z dostępnych opcji
        const playerWeapon = document.querySelector('.player-weapon i');             // Wybrana broń przez gracza
        const computerWeapon = document.querySelector('.computer-weapon i');         // Wylosowana broń dla komputera

    //Computer weapon selection

    const computerWeapons = ['rock', 'paper', 'scissors'];                           // Definicja typu broni
        computerWeapons.forEach((weapons) => {                                             // Tworzymy pętle uruchamiającą losowanie nr broni dla komutera, dla  każdego wyboru gracza
             weapons.addEventListner("click", () => {                                     // "nasłuch" czy gracz wybrał opcję
                const computerWeaponsNumber = Math.floor(Math.random() * 3);             // losowe generowanie nr broni dla komputera
                const computerWeaponsChoise = computerWeapons[computerWeaponsNumber];    // Ustawianie wyboru dla komputera wg wylosowanego nr broni.
                clash(this.textContent, computerWeaponsChoise);                             // wywołanie funkcji zestawiajacej wybory gracza i komputera
                computerWeapon.classList.remove('fa-hand-rock');                         // zmieniamy ikony - usuniecie stylu        
                computerWeapon.classList.add('fa-hand-{computerWeaponsChoise}');          // zmieniamy ikony  
                playerWeapon.classList.remove('fa-hand-rock');                              // zmieniamy ikony
                playerWeapon.classList.add('fa-hand-${this.textContent}');                 // zmieniamy ikony 
        });
    });
};

battle();                                                                               // wywołanie funkcji

const clash = (playerWeaponChoise, computerWeaponsChoise) => {                          // zestawiamy wartości wyboru  
    const clashResult = document.querySelector('.game-result');                         // ustawianie wyświetlania wyniku     
    //remis
    if(playerWeaponChoise === computerWeaponsChoise){
        clashResult.textContent = 'It is a tie !';
        return;
    }
    //jeśli kamień
    if(playerWeaponChoise === 'rock'){
        if(computerWeaponsChoise === 'scissors'){
            clashResult.textContent = 'Player Wins !';
            return;
        } else {
            clashResult.textContent = 'Computer Wins !';
            return;
        }
    }
    //jeśli nozyce
    if(playerWeaponChoise === 'scissors'){
        if(computerWeaponsChoise === 'paper'){
            clashResult.textContent = 'Player Wins !';
            return;
        } else {
            clashResult.textContent = 'Computer Wins !';
            return;
        }
    }
    //jeśli papier
    if(playerWeaponChoise === 'paper'){
        if(computerWeaponsChoise === 'rock'){
            clashResult.textContent = 'Player Wins !';
            return;
        } else {
            clashResult.textContent = 'Computer Wins !';
            return;
        }
    }

}

