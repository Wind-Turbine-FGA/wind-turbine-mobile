Algoritmos de Controle
-------------------------------------------------------

Algoritmos de controle do aerogerador de eixo vertical. Os códigos implementados estão na pasta final_codes. A pasta imagens e videos contém alguns dos resultados experimentais obtidos.


Microcontrolador: MSP 430g2553 <br/>


Circuitos: <br/>
-- 1 - Boost<br/>
-- 2 - Inversor Monofasico<br/>
<br/>
<br/>


1 - Boost (MPPT)
-------------------------------------------------------

O circuito boost tem como objetivo controlar a tensão e a corrente recebida pelo retificador da turbina. Essa tarefa é realizada utilizando pulsos PWM e ativando/desativando um transistor IGBT. <br/>

Conhecendo o comportamento normal de uma turbina eólica (potênicia x velocidade), o algoritmo implementando no circuito boost pretende controlar a turbina de maneira a sempre operar no ponto ótimo utilizando o MPPT (Maximum Power Point Tracker).<br/>

O algoritmo implementado é o P&O(Pertube e Observe). Recebendo como entrada os sensores de corrente e tensão da saída do circuito boost e a saída a largura do duty-cycle do pwm.<br/>

Inputs<br/>
1 - p1.4 = Sensor de Corrente<br/>
2 - p1.5 = Sensor de Tensão <br/>
<br/>
Outputs<br/>
1 - p1.6 = PWM<br/>

<img src="images/boost.jpeg" />
Circuito Boost com seu driver, MSP 430 g2553 para controle, placa de sensores e Retificador trifásico

<br/>

2 - Inversor Monofásico 
-------------------------------------------------------

Recebendo a tensão/corrente do boost o inversor transforma a corrente DC em AC em 60hz. De maneira análoga ao controle do boost, o inversor é controlado via pulsos PWM que ativam/desativam 4 transistores IGBT. O algoritmo recebe como entrada o sensore de tensão AC da rede elétrica e sua saída são a largura dos duty-cycles de 2 PWM. A tensão de saída do inversor segue a frequência e fase da rede elétrica.

Inputs<br/>
1 - p1.4 = Sensor de Tensão AC<br/>
<br/>
Outputs<br/>
1 - p1.6 = PWM<br/>
2 - p2.1 = PWM<br/>

<img src="images/inversor.jpeg" />
Circuito Inversor Monofásico com seus 2 drivers

<br/>

<img src="images/saida_inversor.jpeg" />
Saída do circuito inversor seguindo a tensão da rede













