# Cifrado César

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
* [3. Objetivos de aprendizaje](#3-objetivos-de-aprendizaje)
* [4. Consideraciones generales](#4-consideraciones-generales)
* [5. Criterios de aceptación mínimos del proyecto](#5-criterios-de-aceptación-mínimos-del-proyecto)
* [6. Hacker edition](#6-hacker-edition)
* [7. Consideraciones técnicas](#7-consideraciones-técnicas)
* [8. Pistas, tips y lecturas complementarias](#8-pistas-tips-y-lecturas-complementarias)
* [9. Checklist](#9-checklist)

***

## 1. Preámbulo

Cifrar significa codificar. El [cifrado César](https://en.wikipedia.org/wiki/Caesar_cipher)
es uno de los primeros métodos de cifrado conocidos. El emperador romano Julio
César lo usaba para enviar órdenes secretas a sus generales en los campos de
batalla.

![caeser-cipher](https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Caesar3.svg/2000px-Caesar3.svg.png)

El cifrado césar es una de las técnicas más simples para cifrar un mensaje. Es
un tipo de cifrado por sustitución, es decir que cada letra del texto original
es reemplazada por otra que se encuentra un número fijo de posiciones
(desplazamiento) más adelante en el mismo alfabeto.

Por ejemplo, si usamos un desplazamiento (_offset_) de 3 posiciones:

* La letra A se cifra como D.
* La palabra CASA se cifra como FDVD.
* Alfabeto sin cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
* Alfabeto cifrado: D E F G H I J K L M N O P Q R S T U V W X Y Z A B C

En la actualidad, todos los cifrados de sustitución simple se descifran con
mucha facilidad y, aunque en la práctica no ofrecen mucha seguridad en la
comunicación por sí mismos; el cifrado César sí puede formar parte de sistemas
más complejos de codificación, como el cifrado Vigenère, e incluso tiene
aplicación en el sistema ROT13.

## 2. Principales usuarias

El proyecto !ME CUIDAN MIS AMIGAS! fue pensado con la finalidad de apoyar a mujeres en una situación de violencia.
¿Quienes pueden utilizarlo?

* Instituciones que se dediquen a acompañar mujeres en situaciones de violencia.
* Mujeres que sean acompañantas psicoemocionales y quieran apoyar a otras mujeres.

Este es un proyecto pensado para mujeres e instituciones que quieran apoyar a mujeres que se encuentren en una situación de violencia
y que sirva de apoyo para poder enviar mensajes rápidos en caso de necesitarlos para pedir auxilio. Es importante generar un plan 
de acción para poder utilizarlos de manera correcta.

## 3. Objetivos de usuarias en relación al producto

* Mantener comunicación secreta con quien necesite apoyo contra las violencias machistas
* Generar mensajes como parte de un plan de acción para mujeres que quieran salir de un contexto violento
* Que las mujeres tengan herramientas que les permitan generar estrategias para cambiar su situación actual

## 4. ¿Cómo creeo que el producto que estoy creando esta resolviendo los problemas?

En un contexto donde las mujeres no nos encontramos seguras ni con las personas cercanas es importante generar
estrategias que nos permitan generar planes de acción para salir del contexto de violencia en que nos encontremos
inmersas y que podamos sentir la confianza de que seremos escuchadas y apoyadas para lograrlo.

## 5. ¿Qué permite la interfaz de usuario?

* Elegir un desplazamiento indicando cuatas posiciones queremos que el cifrado
  desplace cada caracter. El cual se deberá recordar para cuando se guarden los
  mensajes y se necesiten descifrar después.
* Insertamos un mensaje (texto) que queremos cifrar.
* Se ve el resultado del mensaje cifrado y se guarda en un lugar seguro
* Insertar el mensaje (texto) a descifrar poniendo el desplazamiento elegido 
  previamente y/o acordado
* Ver el resultado del mensaje descifrado
* 
### Definición del producto

En el README.md, cuéntanos cómo pensaste en los usuarios y cuál fue tu proceso
para definir el producto final a nivel de experiencia y de interfaz.

* Quiénes son los principales usuarios de producto.
* Cuáles son los objetivos de estos usuarios en relación con tu producto.
* Cómo crees que el producto que estás creando está resolviendo sus problemas.

### Interfaz de usuario (UI)

La interfaz debe permitir al usuario:

* Elegir un desplazamiento (_offset_) indicando cuántas posiciones queremos que
  el cifrado desplace cada caracter.
* Insertar un mensaje (texto) que queremos cifrar.
* Ver el resultado del mensaje cifrado.
* Insertar un mensaje (texto) a descifrar.
* Ver el resultado del mensaje descifrado.

### Prototipo de baja fidelidad

