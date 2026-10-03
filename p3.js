// --- SINTETIZADOR DE AUDIO JUGUETÓN ---
class SintetizadorEscolar {
    constructor() {
        this.ctx = null;
        this.activo = true;
    }

    iniciar() {
        if (!this.activo) return;
        if (!this.ctx) {
            try {
                this.ctx = new (window.AudioContext || window.webkitAudioContext)();
            } catch (e) {
                console.warn("Navegador no soporta sonido sintetizado.", e);
            }
        }
    }

    playPop() {
        this.iniciar();
        if (!this.ctx || !this.activo) return;
        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.type = 'sine';
        osc.frequency.setValueAtTime(300, now);
        osc.frequency.exponentialRampToValueAtTime(700, now + 0.08);

        gain.gain.setValueAtTime(0.15, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.08);

        osc.start();
        osc.stop(now + 0.08);
    }

    playCorrecto() {
        this.iniciar();
        if (!this.ctx || !this.activo) return;
        const now = this.ctx.currentTime;
        
        // Escala arpegiada alegre: C5 -> E5 -> G5 -> C6
        const notas = [523.25, 659.25, 783.99, 1046.50];
        notas.forEach((freq, i) => {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.connect(gain);
            gain.connect(this.ctx.destination);
            
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(freq, now + i * 0.07);
            
            gain.gain.setValueAtTime(0.15, now + i * 0.07);
            gain.gain.exponentialRampToValueAtTime(0.01, now + i * 0.07 + 0.25);
            
            osc.start(now + i * 0.07);
            osc.stop(now + i * 0.07 + 0.25);
        });
    }

    playIncorrecto() {
        this.iniciar();
        if (!this.ctx || !this.activo) return;
        const now = this.ctx.currentTime;
        
        // Efecto caricaturesco hacia abajo
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(220, now);
        osc.frequency.linearRampToValueAtTime(120, now + 0.35);
        
        gain.gain.setValueAtTime(0.15, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.35);
        
        osc.start();
        osc.stop(now + 0.35);
    }

    playCelebracion() {
        this.iniciar();
        if (!this.ctx || !this.activo) return;
        const now = this.ctx.currentTime;
        
        // Arpegio mágico de victoria
        const freqs = [440, 554.37, 659.25, 880, 1108.73, 1318.51, 1760];
        freqs.forEach((freq, i) => {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.connect(gain);
            gain.connect(this.ctx.destination);
            
            osc.type = 'sine';
            osc.frequency.setValueAtTime(freq, now + i * 0.05);
            
            gain.gain.setValueAtTime(0.12, now + i * 0.05);
            gain.gain.exponentialRampToValueAtTime(0.01, now + i * 0.05 + 0.3);
            
            osc.start(now + i * 0.05);
            osc.stop(now + i * 0.05 + 0.3);
        });
    }
}

const sonido = new SintetizadorEscolar();

// --- BASE DE DATOS DE AVATARES ---
const AVATARS = [
    {
        id: "dog",
        name: "Perrito Toby",
        emoji: "🐶",
        colorClass: "avatar-dog",
        normalMsg: "¡Hola! ¡Estoy listo para aprender contigo! ¡Guau!",
        happyMsg: "¡Eso es excelente! ¡Eres súper inteligente! 🐾",
        sadMsg: "No pasa nada, ¡el próximo intento lo harás increíble! ❤️"
    },
    {
        id: "kitty",
        name: "Gatita Luna",
        emoji: "🐱",
        colorClass: "avatar-kitty",
        normalMsg: "¡Miau! Vamos a divertirnos descubriendo cosas juntos.",
        happyMsg: "¡Súper bien hecho! ¡Estrellita para ti! ⭐",
        sadMsg: "¡Casi! Respira profundo e inténtalo de nuevo, ¡tú puedes! 🌸"
    },
    {
        id: "bunny",
        name: "Conejito Copito",
        emoji: "🐰",
        colorClass: "avatar-bunny",
        normalMsg: "¡Hola amiguito! ¡Demos saltos de alegría aprendiendo!",
        happyMsg: "¡Saltando de emoción! ¡Respuesta perfecta! 🥕",
        sadMsg: "¡No te rindas! Con calma y paciencia saldrá genial. 🐰"
    },
    {
        id: "fox",
        name: "Zorrito Foxy",
        emoji: "🦊",
        colorClass: "avatar-fox",
        normalMsg: "¡Hola! Me encantan los acertijos. ¿Listo para el reto?",
        happyMsg: "¡Genio! ¡Lo resolviste al instante! 🌟",
        sadMsg: "¡Un pasito a la vez! El aprendizaje es un lindo camino. 🍃"
    }
];

// --- BASE DE DATOS DE PREGUNTAS ---
const PREGUNTAS_MATERIA = {
    "Matemáticas": {
        color: "#6bc15b",
        icon: "🧮",
        desc: "Multiplicaciones, restas con transformación y problemas",
        preguntas: [
            {
                pregunta: "Si compras 3 cajas de colores y cada una tiene 6 lápices, ¿cuántos lápices tienes en total?",
                detallesVisuales: "📦 (6) + 📦 (6) + 📦 (6)",
                opciones: ["12", "15", "18", "20"],
                respuesta: "18",
                explicacion: "¡Excelente! Multiplicamos 3 cajas por 6 lápices: 3 × 6 = 18."
            },
            {
                pregunta: "¿Cuál es el resultado de la siguiente suma: 150 + 230?",
                opciones: ["380", "350", "280", "400"],
                respuesta: "380",
                explicacion: "¡Súper! 150 + 230 = 380."
            },
            {
                pregunta: "Si tienes 45 canicas y le regalas 18 a tu amigo, ¿cuántas canicas te quedan?",
                opciones: ["27", "30", "23", "37"],
                respuesta: "27",
                explicacion: "¡Muy bien! 45 - 18 = 27."
            },
            {
                pregunta: "¿Qué figura geométrica tiene 5 lados?",
                opciones: ["Triángulo", "Cuadrado", "Pentágono 🛑", "Hexágono"],
                respuesta: "Pentágono 🛑",
                explicacion: "¡Exacto! La figura de 5 lados se llama pentágono."
            },
            {
                pregunta: "¿Cuánto es 4 × 8?",
                opciones: ["24", "32", "36", "28"],
                respuesta: "32",
                explicacion: "¡Genial! 4 × 8 = 32."
            },
            {
                pregunta: "¿Cuánto es 7 × 6?",
                opciones: ["36", "42", "48", "56"],
                respuesta: "42",
                explicacion: "¡Muy bien! 7 × 6 = 42."
            },
            {
                pregunta: "¿Cuánto es 9 × 5?",
                opciones: ["40", "45", "50", "35"],
                respuesta: "45",
                explicacion: "¡Correcto! 9 × 5 = 45."
            },
            {
                pregunta: "¿Cuál es el resultado de 500 - 175?",
                opciones: ["325", "335", "275", "375"],
                respuesta: "325",
                explicacion: "¡Excelente! 500 - 175 = 325."
            },
            {
                pregunta: "¿Cuál número es mayor?",
                opciones: ["245", "254", "205", "240"],
                respuesta: "254",
                explicacion: "¡Muy bien! 254 es mayor que los otros números."
            },
            {
                pregunta: "¿Cuál número es menor?",
                opciones: ["389", "398", "308", "380"],
                respuesta: "308",
                explicacion: "¡Correcto! 308 es el número más pequeño."
            },
            {
                pregunta: "Si tienes 24 dulces y los repartes entre 4 niños por partes iguales, ¿cuántos recibe cada uno?",
                opciones: ["4", "5", "6", "8"],
                respuesta: "6",
                explicacion: "¡Muy bien! 24 ÷ 4 = 6."
            },
            {
                pregunta: "¿Cuánto es 8 × 7?",
                opciones: ["54", "56", "64", "48"],
                respuesta: "56",
                explicacion: "¡Genial! 8 × 7 = 56."
            },
            {
                pregunta: "¿Cuánto es 63 ÷ 9?",
                opciones: ["6", "7", "8", "9"],
                respuesta: "7",
                explicacion: "¡Excelente! 63 ÷ 9 = 7."
            },
            {
                pregunta: "¿Cuántos lados tiene un hexágono?",
                opciones: ["4", "5", "6", "8"],
                respuesta: "6",
                explicacion: "¡Correcto! Un hexágono tiene 6 lados."
            },
            {
                pregunta: "¿Cuánto es 125 + 75?",
                opciones: ["180", "190", "200", "210"],
                respuesta: "200",
                explicacion: "¡Muy bien! 125 + 75 = 200."
            },
            {
                pregunta: "Ana tiene 80 pesos y gasta 35 pesos. ¿Cuánto dinero le queda?",
                opciones: ["35", "40", "45", "50"],
                respuesta: "45",
                explicacion: "¡Correcto! 80 - 35 = 45 pesos."
            },
            {
                pregunta: "¿Cuál es la mitad de 20?",
                opciones: ["5", "10", "15", "12"],
                respuesta: "10",
                explicacion: "¡Excelente! La mitad de 20 es 10."
            },
            {
                pregunta: "¿Cuánto es 6 × 9?",
                opciones: ["45", "54", "56", "63"],
                respuesta: "54",
                explicacion: "¡Muy bien! 6 × 9 = 54."
            },
            {
                pregunta: "Si una semana tiene 7 días, ¿cuántos días hay en 3 semanas?",
                opciones: ["14", "21", "24", "28"],
                respuesta: "21",
                explicacion: "¡Correcto! 7 × 3 = 21 días."
            },
            {
                pregunta: "Luis tiene 36 estampas y quiere repartirlas entre 6 amigos por partes iguales. ¿Cuántas estampas recibe cada uno?",
                opciones: ["5", "6", "7", "8"],
                respuesta: "6",
                explicacion: "¡Excelente! 36 ÷ 6 = 6."
            }
        ]
    },

    "Español": {
        color: "#ffd93d",
        icon: "📖",
        desc: "Sustantivos, adjetivos, verbos y ortografía",
        preguntas: [
            {
                pregunta: "¿Cuál de las siguientes palabras es un VERBO (una acción)?",
                opciones: ["Manzana", "Brincar 🏃", "Bonito", "Mesa"],
                respuesta: "Brincar 🏃",
                explicacion: "¡Correcto! Brincar es una acción, por lo tanto es un verbo."
            },
            {
                pregunta: "En la frase 'El perro NEGRO corre en el parque', ¿qué tipo de palabra es 'NEGRO'?",
                opciones: ["Un verbo", "Un adjetivo calificativo", "Un sustantivo", "Una vocal"],
                respuesta: "Un adjetivo calificativo",
                explicacion: "¡Muy bien! Negro nos dice cómo es el perro, así que es un adjetivo."
            },
            {
                pregunta: "¿Cuál palabra está escrita CORRECTAMENTE?",
                opciones: ["Cansion", "Canción 🎵", "Kancion", "Casion"],
                respuesta: "Canción 🎵",
                explicacion: "¡Perfecto! La palabra correcta es canción y lleva tilde en la ó."
            },
            {
                pregunta: "¿Cuál es el sinónimo de la palabra 'ALEGRÍA'?",
                opciones: ["Tristeza", "Enojo", "Felicidad 😊", "Miedo"],
                respuesta: "Felicidad 😊",
                explicacion: "¡Muy bien! Alegría y felicidad tienen significados parecidos."
            },
            {
                pregunta: "¿Qué signo de puntuación se usa para hacer una PREGUNTA?",
                opciones: ["Punto final (.)", "Signos de interrogación (¿?)", "Coma (,)", "Punto y coma (;)"],
                respuesta: "Signos de interrogación (¿?)",
                explicacion: "¡Excelente! Las preguntas se escriben entre signos de interrogación."
            },
            {
                pregunta: "¿Cuál de las siguientes palabras es un sustantivo?",
                opciones: ["Correr", "Bonito", "Escuela 🏫", "Rápidamente"],
                respuesta: "Escuela 🏫",
                explicacion: "¡Correcto! Escuela es el nombre de un lugar, por eso es un sustantivo."
            },
            {
                pregunta: "¿Cuál de las siguientes palabras es un adjetivo?",
                opciones: ["Grande", "Saltar", "Pelota", "Comer"],
                respuesta: "Grande",
                explicacion: "¡Muy bien! Grande describe cómo es algo, por eso es un adjetivo."
            },
            {
                pregunta: "¿Cuál es el antónimo de 'ALTO'?",
                opciones: ["Grande", "Bajo", "Fuerte", "Rápido"],
                respuesta: "Bajo",
                explicacion: "¡Correcto! Bajo es lo contrario de alto."
            },
            {
                pregunta: "¿Cuál palabra está escrita correctamente?",
                opciones: ["Jirafa 🦒", "Girafa", "Jirrapa", "Giraffa"],
                respuesta: "Jirafa 🦒",
                explicacion: "¡Excelente! La forma correcta de escribirla es jirafa."
            },
            {
                pregunta: "¿Cuál de estas palabras es un verbo?",
                opciones: ["Cantar 🎤", "Canción", "Alegre", "Micrófono"],
                respuesta: "Cantar 🎤",
                explicacion: "¡Muy bien! Cantar es una acción, por eso es un verbo."
            },
            {
                pregunta: "¿Cuál es el plural de 'flor'?",
                opciones: ["Flors", "Flores", "Floras", "Flor"],
                respuesta: "Flores",
                explicacion: "¡Correcto! El plural de flor es flores."
            },
            {
                pregunta: "¿Cuál de estas palabras tiene cuatro sílabas?",
                opciones: ["Sol", "Casa", "Mariposa 🦋", "Pan"],
                respuesta: "Mariposa 🦋",
                explicacion: "¡Muy bien! Ma-ri-po-sa tiene cuatro sílabas."
            },
            {
                pregunta: "¿Cuál oración está escrita correctamente?",
                opciones: ["el gato duerme.", "El gato duerme.", "el Gato duerme", "EL gato duerme"],
                respuesta: "El gato duerme.",
                explicacion: "¡Excelente! Las oraciones comienzan con mayúscula y terminan con punto."
            },
            {
                pregunta: "¿Cuál es el sinónimo de 'FELIZ'?",
                opciones: ["Contento 😊", "Enojado", "Triste", "Cansado"],
                respuesta: "Contento 😊",
                explicacion: "¡Correcto! Feliz y contento tienen significados parecidos."
            },
            {
                pregunta: "¿Cuál es el antónimo de 'FRÍO'?",
                opciones: ["Helado", "Caliente 🔥", "Fresco", "Nieve"],
                respuesta: "Caliente 🔥",
                explicacion: "¡Muy bien! Caliente es lo contrario de frío."
            },
            {
                pregunta: "¿Cuál palabra está escrita correctamente?",
                opciones: ["Zapato 👟", "Sapato", "Zapatoz", "Sappato"],
                respuesta: "Zapato 👟",
                explicacion: "¡Perfecto! La palabra correcta es zapato."
            },
            {
                pregunta: "¿Qué palabra completa correctamente la oración? 'Mi hermana ___ una canción.'",
                opciones: ["canta 🎵", "mesa", "bonita", "azul"],
                respuesta: "canta 🎵",
                explicacion: "¡Correcto! Canta es el verbo que indica la acción."
            },
            {
                pregunta: "¿Cuál palabra empieza con la misma letra que 'mariposa'?",
                opciones: ["Mesa", "Sol", "Casa", "Luna"],
                respuesta: "Mesa",
                explicacion: "¡Muy bien! Mariposa y mesa comienzan con la letra M."
            },
            {
                pregunta: "¿Cuál de estas palabras está en singular?",
                opciones: ["Perros", "Casas", "Libro 📚", "Flores"],
                respuesta: "Libro 📚",
                explicacion: "¡Excelente! Libro se refiere a un solo objeto."
            },
            {
                pregunta: "¿Cuál oración tiene correctamente los signos de interrogación?",
                opciones: ["¿Dónde está mi mochila?", "Dónde está mi mochila.", "¿Dónde está mi mochila.", "Dónde está mi mochila?"],
                respuesta: "¿Dónde está mi mochila?",
                explicacion: "¡Correcto! Las preguntas en español comienzan con ¿ y terminan con ?."
            }
        ]
    },

    "Inglés": {
        color: "#4d96ff",
        icon: "🌎",
        desc: "Vocabulario, días de la semana y oraciones cortas",
        preguntas: [
            {
                pregunta: "¿Cómo se dice 'Lunes' en inglés?",
                opciones: ["Sunday", "Monday", "Friday", "Wednesday"],
                respuesta: "Monday",
                explicacion: "¡Correcto! Lunes se dice Monday en inglés."
            },
            {
                pregunta: "¿Qué significa la oración: 'The dog is sleeping' 🐶💤?",
                opciones: ["El perro está comiendo", "El perro está corriendo", "El perro está durmiendo", "El perro está jugando"],
                respuesta: "El perro está durmiendo",
                explicacion: "¡Súper! Sleeping significa durmiendo."
            },
            {
                pregunta: "¿Cómo se dice el número '15' en inglés?",
                opciones: ["Five", "Ten", "Fifteen", "Fifty"],
                respuesta: "Fifteen",
                explicacion: "¡Exacto! El número 15 se dice Fifteen."
            },
            {
                pregunta: "¿Cuál de estos objetos pertenece a la categoría 'School Supplies'?",
                opciones: ["Pencil ✏️", "Apple 🍎", "Dog 🐶", "Shoes 👟"],
                respuesta: "Pencil ✏️",
                explicacion: "¡Muy bien! Pencil significa lápiz y es un útil escolar."
            },
            {
                pregunta: "¿Cuál es el opuesto de la palabra 'BIG'?",
                opciones: ["Tall", "Small 🔬", "Fast", "Happy"],
                respuesta: "Small 🔬",
                explicacion: "¡Genial! Small significa pequeño y es lo contrario de Big."
            },
            {
                pregunta: "¿Cómo se dice 'gato' en inglés?",
                opciones: ["Dog", "Cat 🐱", "Bird", "Fish"],
                respuesta: "Cat 🐱",
                explicacion: "¡Correcto! Gato se dice Cat."
            },
            {
                pregunta: "¿Qué significa 'red'?",
                opciones: ["Azul", "Verde", "Rojo ❤️", "Amarillo"],
                respuesta: "Rojo ❤️",
                explicacion: "¡Muy bien! Red significa rojo."
            },
            {
                pregunta: "¿Cómo se dice 'miércoles' en inglés?",
                opciones: ["Monday", "Tuesday", "Wednesday", "Saturday"],
                respuesta: "Wednesday",
                explicacion: "¡Excelente! Miércoles se dice Wednesday."
            },
            {
                pregunta: "¿Qué número significa 'ten'?",
                opciones: ["5", "8", "10", "12"],
                respuesta: "10",
                explicacion: "¡Correcto! Ten significa diez."
            },
            {
                pregunta: "¿Cómo se dice 'perro' en inglés?",
                opciones: ["Cat", "Dog 🐶", "Bird", "Horse"],
                respuesta: "Dog 🐶",
                explicacion: "¡Muy bien! Perro se dice Dog."
            },
            {
                pregunta: "¿Qué significa 'blue'?",
                opciones: ["Rojo", "Verde", "Azul 💙", "Rosa"],
                respuesta: "Azul 💙",
                explicacion: "¡Correcto! Blue significa azul."
            },
            {
                pregunta: "¿Cómo se dice 'uno' en inglés?",
                opciones: ["One", "Two", "Three", "Four"],
                respuesta: "One",
                explicacion: "¡Excelente! Uno se dice One."
            },
            {
                pregunta: "¿Qué significa 'book'?",
                opciones: ["Lápiz", "Libro 📖", "Mesa", "Mochila"],
                respuesta: "Libro 📖",
                explicacion: "¡Muy bien! Book significa libro."
            },
            {
                pregunta: "¿Cómo se dice 'gracias' en inglés?",
                opciones: ["Hello", "Please", "Thank you", "Goodbye"],
                respuesta: "Thank you",
                explicacion: "¡Correcto! Gracias se dice Thank you."
            },
            {
                pregunta: "¿Qué significa 'happy'? 😊",
                opciones: ["Triste", "Feliz", "Enojado", "Cansado"],
                respuesta: "Feliz",
                explicacion: "¡Muy bien! Happy significa feliz."
            },
            {
                pregunta: "¿Cómo se dice 'escuela' en inglés?",
                opciones: ["House", "School", "Park", "Store"],
                respuesta: "School",
                explicacion: "¡Excelente! Escuela se dice School."
            },
            {
                pregunta: "¿Qué significa 'green'?",
                opciones: ["Verde 💚", "Amarillo", "Negro", "Blanco"],
                respuesta: "Verde 💚",
                explicacion: "¡Correcto! Green significa verde."
            },
            {
                pregunta: "¿Cómo se dice 'buenos días' en inglés?",
                opciones: ["Good night", "Good morning", "Goodbye", "Thank you"],
                respuesta: "Good morning",
                explicacion: "¡Muy bien! Buenos días se dice Good morning."
            },
            {
                pregunta: "¿Qué significa 'three'?",
                opciones: ["Uno", "Dos", "Tres", "Cuatro"],
                respuesta: "Tres",
                explicacion: "¡Correcto! Three significa tres."
            },
            {
                pregunta: "¿Cómo se dice 'mamá' en inglés?",
                opciones: ["Father", "Brother", "Mother", "Sister"],
                respuesta: "Mother",
                explicacion: "¡Excelente! Mamá se dice Mother."
            }
        ]
    },

    "Ciencias": {
        color: "#ff85a1",
        icon: "🌱",
        desc: "Estados de la materia, seres vivos y el planeta",
        preguntas: [
            {
                pregunta: "¿En qué estado se encuentra el agua cuando se convierte en hielo 🧊?",
                opciones: ["Líquido", "Sólido", "Gaseoso", "Plasma"],
                respuesta: "Sólido",
                explicacion: "¡Correcto! El hielo es agua en estado sólido."
            },
            {
                pregunta: "¿Cómo se llaman los animales que se alimentan ÚNICAMENTE de plantas 🌿?",
                opciones: ["Carnívoros", "Herbívoros 🥗", "Omnívoros", "Insectívoros"],
                respuesta: "Herbívoros 🥗",
                explicacion: "¡Perfecto! Los herbívoros se alimentan de plantas."
            },
            {
                pregunta: "¿Cuál es el órgano principal que bombea la sangre a todo nuestro cuerpo?",
                opciones: ["Los pulmones", "El estómago", "El corazón 🔴", "El cerebro"],
                respuesta: "El corazón 🔴",
                explicacion: "¡Excelente! El corazón bombea sangre por todo nuestro cuerpo."
            },
            {
                pregunta: "¿Qué proceso realizan las plantas utilizando la luz del Sol para fabricar su alimento?",
                opciones: ["Respiración", "Fotosíntesis 🍃", "Digestión", "Evaporación"],
                respuesta: "Fotosíntesis 🍃",
                explicacion: "¡Súper! Las plantas utilizan la luz solar para realizar la fotosíntesis."
            },
            {
                pregunta: "¿Qué movimiento de la Tierra provoca el DÍA y la NOCHE ☀️🌙?",
                opciones: ["Rotación 🔄", "Traslación", "Solsticio", "Eclipse"],
                respuesta: "Rotación 🔄",
                explicacion: "¡Genial! La Tierra gira sobre su propio eje y ese movimiento se llama rotación."
            },
            {
                pregunta: "¿Cuál de estos es un ser vivo?",
                opciones: ["Piedra", "Árbol 🌳", "Mesa", "Pelota"],
                respuesta: "Árbol 🌳",
                explicacion: "¡Correcto! Un árbol es un ser vivo."
            },
            {
                pregunta: "¿Qué necesitan principalmente las plantas para crecer?",
                opciones: ["Luz, agua y aire", "Juguetes", "Televisión", "Caramelos"],
                respuesta: "Luz, agua y aire",
                explicacion: "¡Muy bien! Las plantas necesitan agua, luz y aire para crecer."
            },
            {
                pregunta: "¿Qué parte de la planta absorbe agua del suelo?",
                opciones: ["Flor", "Hoja", "Raíz 🌱", "Fruto"],
                respuesta: "Raíz 🌱",
                explicacion: "¡Excelente! Las raíces absorben agua y minerales del suelo."
            },
            {
                pregunta: "¿Qué órgano usamos principalmente para respirar?",
                opciones: ["Corazón", "Pulmones 🫁", "Estómago", "Cerebro"],
                respuesta: "Pulmones 🫁",
                explicacion: "¡Correcto! Los pulmones nos ayudan a respirar."
            },
            {
                pregunta: "¿Cuál de estos animales es un mamífero?",
                opciones: ["Perro 🐶", "Pez", "Mariposa", "Gallina"],
                respuesta: "Perro 🐶",
                explicacion: "¡Muy bien! El perro es un mamífero."
            },
            {
                pregunta: "¿Qué planeta habitamos?",
                opciones: ["Marte", "Venus", "La Tierra 🌎", "Júpiter"],
                respuesta: "La Tierra 🌎",
                explicacion: "¡Excelente! Los seres humanos vivimos en el planeta Tierra."
            },
            {
                pregunta: "¿Cuál es la estrella que nos proporciona luz y calor?",
                opciones: ["La Luna", "El Sol ☀️", "Marte", "Venus"],
                respuesta: "El Sol ☀️",
                explicacion: "¡Correcto! El Sol es una estrella que nos proporciona luz y calor."
            },
            {
                pregunta: "¿Qué estado del agua podemos encontrar normalmente en un vaso?",
                opciones: ["Sólido", "Líquido 💧", "Gaseoso", "Plasma"],
                respuesta: "Líquido 💧",
                explicacion: "¡Muy bien! El agua de un vaso normalmente está en estado líquido."
            },
            {
                pregunta: "¿Qué sentido usamos para escuchar sonidos?",
                opciones: ["Vista", "Oído 👂", "Olfato", "Gusto"],
                respuesta: "Oído 👂",
                explicacion: "¡Correcto! Utilizamos nuestros oídos para escuchar."
            },
            {
                pregunta: "¿Qué sentido usamos para ver los colores?",
                opciones: ["Tacto", "Gusto", "Vista 👀", "Olfato"],
                respuesta: "Vista 👀",
                explicacion: "¡Excelente! La vista nos permite observar colores y formas."
            },
            {
                pregunta: "¿Qué animal vive principalmente en el agua?",
                opciones: ["Pez 🐟", "Perro", "Gato", "Caballo"],
                respuesta: "Pez 🐟",
                explicacion: "¡Muy bien! Los peces viven principalmente en el agua."
            },
            {
                pregunta: "¿Qué gas necesitamos para respirar?",
                opciones: ["Oxígeno", "Helio", "Vapor", "Humo"],
                respuesta: "Oxígeno",
                explicacion: "¡Correcto! Nuestro cuerpo necesita oxígeno para respirar."
            },
            {
                pregunta: "¿Cuál de estos materiales es sólido?",
                opciones: ["Agua", "Aire", "Piedra 🪨", "Vapor"],
                respuesta: "Piedra 🪨",
                explicacion: "¡Muy bien! La piedra es un material sólido."
            },
            {
                pregunta: "¿Qué debemos hacer para cuidar nuestro planeta?",
                opciones: ["Tirar basura al suelo", "Desperdiciar agua", "Reciclar y cuidar el agua ♻️", "Romper las plantas"],
                respuesta: "Reciclar y cuidar el agua ♻️",
                explicacion: "¡Excelente! Reciclar y cuidar los recursos ayuda a proteger nuestro planeta."
            },
            {
                pregunta: "¿Qué parte del cuerpo usamos para pensar y aprender?",
                opciones: ["Corazón", "Cerebro 🧠", "Pie", "Estómago"],
                respuesta: "Cerebro 🧠",
                explicacion: "¡Correcto! El cerebro nos ayuda a pensar, aprender y recordar."
            }
        ]
    }
};

// --- ESTADOS DE JUEGO ---
let avatarSeleccionado = null;
let materiaSeleccionada = null;
let preguntaActualIdx = 0;
let corazones = 3;
let monedas = 100;
let racha = 0;
let medallasGanadas = [];
let respondido = false;

// --- ELEMENTOS DEL DOM ---
const pAvatar = document.getElementById("pantallaAvatar");
const pMaterias = document.getElementById("pantallaMaterias");
const pJuego = document.getElementById("pantallaJuego");
const pGameOver = document.getElementById("pantallaGameOver");
const pVictoria = document.getElementById("pantallaVictoria");

const btnVolver = document.getElementById("btnVolver");
const btnSonido = document.getElementById("btnSonido");
const txtMonedas = document.getElementById("contadorMonedas");
const corazonesHud = document.getElementById("corazonesHud");

// --- INICIALIZADOR DE AVATARES ---
function renderizarAvatares() {
    const grid = document.getElementById("gridAvatars");
    grid.innerHTML = "";
    AVATARS.forEach(av => {
        const btn = document.createElement("button");
        btn.className = `tarjeta-avatar ${av.colorClass}`;
        btn.onclick = () => seleccionarAvatar(av);
        btn.innerHTML = `
            <span class="avatar-emoji">${av.emoji}</span>
            <span class="avatar-nombre">${av.name}</span>
        `;
        grid.appendChild(btn);
    });
}

function seleccionarAvatar(av) {
    sonido.playPop();
    avatarSeleccionado = av;
    
    // Cambiar texto de bienvenida
    document.getElementById("avatarBurbuja").textContent = av.emoji;
    document.getElementById("textoCompanero").textContent = av.normalMsg;
    
    pAvatar.classList.add("escondido");
    pMaterias.classList.remove("escondido");
    btnVolver.classList.remove("escondido");
    
    renderizarMaterias();
    actualizarMedallasUI();
}

// --- MENU DE MATERIAS ---
function renderizarMaterias() {
    const grid = document.getElementById("gridMaterias");
    grid.innerHTML = "";
    Object.entries(PREGUNTAS_MATERIA).forEach(([nombre, info]) => {
        const completada = medallasGanadas.includes(nombre);
        const cardClass = `tarjeta-materia materia-${nombre.toLowerCase().replace("á", "a").replace("í", "i")}`;
        
        const card = document.createElement("div");
        card.className = cardClass;
        card.onclick = () => iniciarMateria(nombre);
        
        card.innerHTML = `
            <div class="materia-icono-box">${info.icon}</div>
            <div class="materia-info">
                <h4>${nombre}</h4>
                <p>${info.desc}</p>
                <div class="materia-meta">⭐ 5 retos • ¡Gana monedas!</div>
            </div>
            ${completada ? '<span class="medalla-ganada-visto">🥇</span>' : ''}
        `;
        grid.appendChild(card);
    });
}

function iniciarMateria(nombre) {
    sonido.playPop();
    materiaSeleccionada = nombre;
    preguntaActualIdx = 0;
    corazones = 3;
    racha = 0;
    respondido = false;
    
    // Selecciona 5 preguntas al azar del banco disponible para esta ronda
    const bancoOriginal = PREGUNTAS_MATERIA[nombre].preguntas;

    PREGUNTAS_MATERIA[nombre].preguntasActivas =
        mezclarArray(bancoOriginal).slice(0, 5);

    actualizarCorazonesUI();
    
    pMaterias.classList.add("escondido");
    pJuego.classList.remove("escondido");
    
    cargarPregunta();
}

// --- LÓGICA DE PREGUNTAS ---
function cargarPregunta() {
    respondido = false;
    const infoMateria = PREGUNTAS_MATERIA[materiaSeleccionada];
    const itemPregunta = infoMateria.preguntasActivas[preguntaActualIdx];
    
    // Ocultar panel de explicación
    document.getElementById("panelExplicacion").classList.add("escondido");
    
    // Configurar encabezado progreso
    document.getElementById("textoProgreso").textContent = `Pregunta ${preguntaActualIdx + 1} de 5`;
    const porc = (preguntaActualIdx / 5) * 100;
    document.getElementById("progresoBarra").style.width = `${porc}%`;
    document.getElementById("progresoBarra").style.backgroundColor = infoMateria.color;
    
    // Configurar pregunta
    const badge = document.getElementById("badgeCategoria");
    badge.textContent = materiaSeleccionada.toUpperCase();
    badge.style.backgroundColor = infoMateria.color;
    
    document.getElementById("textoPregunta").textContent = itemPregunta.pregunta;
    
    // Configurar apoyo visual o esconderlo
    const apoyo = document.getElementById("apoyoVisual");
    if (itemPregunta.detallesVisuales) {
        apoyo.textContent = itemPregunta.detallesVisuales;
        apoyo.style.display = "block";
    } else {
        apoyo.style.display = "none";
    }
    
    // Cargar opciones
    const gridOpciones = document.getElementById("gridOpciones");
    gridOpciones.innerHTML = "";

    // Las opciones también se mezclan aleatoriamente
    const opcionesMezcladas = mezclarArray(itemPregunta.opciones);
    
    opcionesMezcladas.forEach(op => {
        const btn = document.createElement("button");
        btn.className = "btn-opcion";
        btn.textContent = op;
        btn.onclick = (e) => calificarRespuesta(op, btn, e);
        gridOpciones.appendChild(btn);
    });
}

function mezclarArray(array) {
    const copia = [...array];

    for (let i = copia.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));

        [copia[i], copia[j]] = [copia[j], copia[i]];
    }

    return copia;
}

function calificarRespuesta(opcion, botonElemento, evento) {
    if (respondido) return;
    respondido = true;
    
    const itemPregunta = PREGUNTAS_MATERIA[materiaSeleccionada].preguntasActivas[preguntaActualIdx];
    const esCorrecta = opcion === itemPregunta.respuesta;
    
    // Desactivar todos los botones
    const botones = document.querySelectorAll(".btn-opcion");
    botones.forEach(b => b.disabled = true);
    
    const panel = document.getElementById("panelExplicacion");
    panel.classList.remove("escondido");
    
    const titExp = document.getElementById("tituloExplicacion");
    const txtExp = document.getElementById("textoExplicacion");
    
    if (esCorrecta) {
        sonido.playCorrecto();
        botonElemento.classList.add("correcta");
        
        monedas += 10;
        racha += 1;
        txtMonedas.textContent = monedas;
        
        titExp.textContent = "🎉 ¡Excelente Trabajo!";
        txtExp.textContent = itemPregunta.explicacion;
        panel.className = "panel-explicacion acierto";
        
        document.getElementById("textoCompanero").textContent = avatarSeleccionado.happyMsg;
        
        // Efecto visual: Monedas volando desde el botón clicked
        if (evento) {
            lanzarMonedaAnimada(evento.clientX, evento.clientY);
        }
        
        // Si tiene vidas dañadas, ¡recuperar un corazón con animación flotante!
        if (corazones < 3) {
            corazones += 1;
            animarRecuperacionCorazon(corazones);
        }
    } else {
        sonido.playIncorrecto();
        botonElemento.classList.add("incorrecta");
        
        // Mostrar la correcta para educar al niño
        botones.forEach(b => {
            if (b.textContent === itemPregunta.respuesta) {
                b.classList.add("correcta");
            }
        });
        
        racha = 0;
        
        titExp.textContent = "💡 ¡Ánimo, puedes lograrlo!";
        txtExp.textContent = itemPregunta.explicacion;
        panel.className = "panel-explicacion fallo";
        
        document.getElementById("textoCompanero").textContent = avatarSeleccionado.sadMsg;
        
        // Animación dinámica de pérdida de corazón solicitada:
        animarPerdidaCorazon(corazones);
        corazones -= 1;
    }
    
    actualizarRachaAviso();
}

// --- SISTEMA INTERACTIVO DE ANIMACIÓN DE CORAZONES ---
function actualizarCorazonesUI() {
    corazonesHud.innerHTML = "";
    for (let i = 1; i <= 3; i++) {
        const slot = document.createElement("div");
        slot.className = "slot-corazon";
        slot.id = `slot-${i}`;
        slot.textContent = i <= corazones ? "❤️" : "🖤";
        if (i > corazones) {
            slot.style.opacity = "0.3";
            slot.style.filter = "grayscale(100%)";
        }
        corazonesHud.appendChild(slot);
    }
}

function animarPerdidaCorazon(numCorazon) {
    const slot = document.getElementById(`slot-${numCorazon}`);
    if (!slot) return;
    
    // Cambiar a corazón roto
    slot.textContent = "💔";
    slot.classList.add("corazon-cayendo");
    
    // Al finalizar la animación física de descenso, actualizar la UI por completo
    setTimeout(() => {
        actualizarCorazonesUI();
    }, 950);
}

function animarRecuperacionCorazon(numCorazon) {
    // Re-crear la UI de forma estática primero pero dejando el nuevo slot vacío
    actualizarCorazonesUI();
    
    const slot = document.getElementById(`slot-${numCorazon}`);
    if (!slot) return;
    
    slot.textContent = "❤️";
    slot.style.opacity = "1";
    slot.style.filter = "none";
    slot.classList.add("corazon-recuperando");
    
    setTimeout(() => {
        slot.classList.remove("corazon-recuperando");
    }, 1000);
}

// --- ANIMACIÓN DE MONEDAS VOLADORAS ---
function lanzarMonedaAnimada(startX, startY) {
    const div = document.createElement("div");
    div.className = "moneda-voladora";
    div.textContent = "🪙 +10";
    div.style.left = `${startX}px`;
    div.style.top = `${startY}px`;
    document.body.appendChild(div);
    
    setTimeout(() => {
        div.remove();
    }, 1000);
}

function irASiguientePregunta() {
    sonido.playPop();
    
    if (corazones <= 0) {
        // Redirigir a Game Over si perdió sus corazones
        pJuego.classList.add("escondido");
        pGameOver.classList.remove("escondido");
        return;
    }
    
    preguntaActualIdx += 1;
    const preguntasList = PREGUNTAS_MATERIA[materiaSeleccionada].preguntasActivas;
    
    if (preguntaActualIdx < preguntasList.length) {
        cargarPregunta();
    } else {
        // Completó con éxito toda la materia
        completarLeccion();
    }
}

function completarLeccion() {
    sonido.playCelebracion();
    
    if (!medallasGanadas.includes(materiaSeleccionada)) {
        medallasGanadas.push(materiaSeleccionada);
    }
    
    monedas += 50; // Gran premio de monedas por lección completada
    txtMonedas.textContent = monedas;
    
    document.getElementById("tituloVictoria").textContent = `¡Felicidades, completaste ${materiaSeleccionada}!`;
    
    pJuego.classList.add("escondido");
    pVictoria.classList.remove("escondido");
    
    renderizarMaterias();
    actualizarMedallasUI();
}

// --- CONTROL DE ACCIONES DE FINALES ---
function recuperarCorazones() {
    sonido.playPop();
    corazones = 3;
    preguntaActualIdx = 0;
    racha = 0;
    respondido = false;

    const bancoOriginal =
        PREGUNTAS_MATERIA[materiaSeleccionada].preguntas;

    PREGUNTAS_MATERIA[materiaSeleccionada].preguntasActivas =
        mezclarArray(bancoOriginal).slice(0, 5);
    
    actualizarCorazonesUI();
    
    pGameOver.classList.add("escondido");
    pJuego.classList.remove("escondido");
    cargarPregunta();
}

function repetirMateria() {
    iniciarMateria(materiaSeleccionada);
    pVictoria.classList.add("escondido");
}

function volverAlMenu() {
    sonido.playPop();
    
    pAvatar.classList.add("escondido");
    pJuego.classList.add("escondido");
    pGameOver.classList.add("escondido");
    pVictoria.classList.add("escondido");
    
    pMaterias.classList.remove("escondido");
    btnVolver.classList.add("escondido");
    
    document.getElementById("textoCompanero").textContent = avatarSeleccionado.normalMsg;
    racha = 0;
    actualizarRachaAviso();
}

function actualizarRachaAviso() {
    const aviso = document.getElementById("notificacionRacha");
    if (racha >= 3) {
        aviso.textContent = `🔥 ¡Llevas una racha de ${racha} respuestas correctas! ¡Súper!`;
        aviso.classList.remove("escondido");
    } else {
        aviso.classList.add("escondido");
    }
}

function actualizarMedallasUI() {
    const box = document.getElementById("listaMedallas");
    if (medallasGanadas.length === 0) {
        box.innerHTML = '<p class="texto-vacio">¡Completa materias con éxito para ganar medallas de oro!</p>';
        return;
    }
    
    box.innerHTML = "";
    medallasGanadas.forEach(med => {
        const d = document.createElement("div");
        d.className = "medalla-item";
        d.innerHTML = `
            <span class="medalla-ico">🥇</span>
            <div class="medalla-lbl">
                <strong>Campeón de</strong><br>
                ${med}
            </div>
        `;
        box.appendChild(d);
    });
}

function reiniciarProgreso() {
    sonido.playPop();
    if (confirm("¿Estás seguro de que quieres borrar tus moneditas y medallas para empezar de nuevo?")) {
        corazones = 3;
        monedas = 100;
        racha = 0;
        medallasGanadas = [];
        avatarSeleccionado = null;
        materiaSeleccionada = null;
        preguntaActualIdx = 0;
        respondido = false;
        
        txtMonedas.textContent = monedas;
        actualizarCorazonesUI();
        
        pMaterias.classList.add("escondido");
        pJuego.classList.add("escondido");
        pGameOver.classList.add("escondido");
        pVictoria.classList.add("escondido");
        btnVolver.classList.add("escondido");
        pAvatar.classList.remove("escondido");
        
        renderizarAvatares();
        actualizarMedallasUI();
    }
}

// --- CONFIGURACIÓN DE AUDIO Y UTILIDADES ---
function alternarSonido() {
    sonido.activo = !sonido.activo;
    btnSonido.textContent = sonido.activo ? "🔊" : "🔇";

    if (sonido.activo) {
        sonido.playPop();
    }
}

// Cargar la pantalla de inicio al abrir la aplicación
window.onload = () => {
    renderizarAvatares();
    actualizarCorazonesUI();

    if (txtMonedas) {
        txtMonedas.textContent = monedas;
    }
}

const opcionesMezcladas = mezclarArray(itemPregunta.opciones);