//MSP430
#include <msp430.h>

int main(void) {

 //##########################################//
 //####  CONFIGURAÇÃO DO WATCHDOG TIMER  ####//
 //##########################################//

 WDTCTL = WDTPW | WDTHOLD; //WATCHDOG TIMER PARADO

 //##########################################//
 //#######  CONFIGURAÇÃO DO CLOCK  ##########//
 //##########################################//

 DCOCTL = 0;             //
 BCSCTL1 = CALBC1_1MHZ;   //CONFIGURA CLOCK EM 1 MHZ
 DCOCTL = CALDCO_1MHZ;   //

 //##########################################//
 //##########  DECLARAÇÃO DE I/Os  ##########//
 //##########################################//

 P1DIR |= BIT2; //P1.6 IMPLEMENTADO COMO SAÍDA
 P2DIR |= BIT2; //P1.6 IMPLEMENTADO COMO SAÍDA

 P1SEL |= BIT2; //CONFIGURANDO P1.6 COMO PERIFÉRICO TA0.1
 P2SEL |= BIT2; //CONFIGURANDO P1.6 COMO PERIFÉRICO TA0.1

 //##########################################//
 //#######  CONFIGURAÇÃO DO TIMER0_A  #######//
 //##########################################//

 TACCR0 = 1000; //PERÍODO DO PWM
 TACCTL1 = OUTMOD_7; //MODO DE SAÍDA DO TIMER0_A: RESET/SET
 TACCR1 = 300; //DUTY CYCLE DO PWM EM 10%
 TACTL = TASSEL_2 + MC_1; //TASSEL_2 -> CLOCK SOURCE: MCLK	MC_1 ->					 	                //TIMER COM CONTAGEM PROGRESSIVA DE 0 ATÉ TACCR1


 TA1CCR0 = 1000; //PERÍODO DO PWM
 TA1CCTL1 = OUTMOD_7; //MODO DE SAÍDA DO TIMER0_A: RESET/SET
 TA1CCR1 = 600; //DUTY CYCLE DO PWM EM 10%
 TA1CTL = TASSEL_2 + MC_1; //TASSEL_2 -> CLOCK SOURCE: MCLK	MC_1 ->

 _BIS_SR(CPUOFF); //DESLIGA A CPU PARA ECONOMIZAR CONSUMO (LPM0)

 return 0;

}
