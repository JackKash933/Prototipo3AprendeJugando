<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Aprende Jugando - Primaria</title>
    <!-- Fuentes redondeadas y amigables para niños -->
    <link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@300..700&family=Nunito:wght@400;700;900&display=swap" rel="stylesheet">
    <style>
        /* --- CONFIGURACIÓN DE COLORES Y ESTILOS GLOBALES --- */
:root {
    --fuente-burbuja: "Fredoka", "Nunito", sans-serif;
    --color-fondo-app: #f5f7fa;
    --color-texto: #3c3c3c;
    --color-blanco: #ffffff;
    
    /* Colores divertidos de la escuela */
    --color-primaria-rojo: #ff6b6b;
    --color-primaria-azul: #4d96ff;
    --color-primaria-amarillo: #ffd93d;
    --color-primaria-verde: #6bc15b;
    --color-primaria-rosa: #ff85a1;
    --color-primaria-morado: #9b5de5;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: var(--fuente-burbuja);
    -webkit-tap-highlight-color: transparent;
}

body {
    background: linear-gradient(135deg, #e0f2fe 0%, #fef3c7 50%, #d1fae5 100%);
    min-height: 100vh;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    overflow-x: hidden;
    position: relative;
}

/* --- ELEMENTOS DE FONDO DIVERTIDOS --- */
.decoracion-nube, .decoracion-globo {
    position: absolute;
    font-size: 4rem;
    opacity: 0.25;
    pointer-events: none;
    user-select: none;
    z-index: 1;
}
.decoracion-nube {
    animation: flotarNube 15s infinite alternate ease-in-out;
}
.decoracion-globo {
    animation: flotarGlobo 8s infinite alternate ease-in-out;
}

@keyframes flotarNube {
    0% { transform: translateX(0) translateY(0); }
    100% { transform: translateX(50px) translateY(10px); }
}
@keyframes flotarGlobo {
    0% { transform: translateY(0) scale(1) rotate(0deg); }
    100% { transform: translateY(-40px) scale(1.1) rotate(10deg); }
}

/* --- CONTENEDOR PRINCIPAL --- */
.app-container {
    width: 100%;
    max-width: 850px;
    margin: 10px auto;
    z-index: 5;
    position: relative;
}

/* --- HEADER BARRA SUPERIOR --- */
.barra-superior {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: rgba(255, 255, 255, 0.9);
    padding: 12px 20px;
    border-radius: 24px;
    border-bottom: 6px solid var(--color-primaria-amarillo);
    box-shadow: 0 8px 0px rgba(0, 0, 0, 0.05);
    margin-bottom: 20px;
}

.seccion-izquierda {
    display: flex;
    align-items: center;
    gap: 12px;
}

.titulo-app {
    display: flex;
    align-items: center;
    gap: 8px;
}
.titulo-app h1 {
    font-size: 1.5rem;
    font-weight: 900;
    color: var(--color-primaria-morado);
    text-shadow: 2px 2px 0px rgba(0, 0, 0, 0.05);
}
.emoji-logo {
    font-size: 2rem;
    animation: brincoLogo 3s infinite ease-in-out;
}

@keyframes brincoLogo {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px) rotate(5deg); }
}

/* BOTONES GLOBALES */
.btn-circular {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    border: 3px solid #dcdcdc;
    background: white;
    font-size: 1.2rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s;
    box-shadow: 0 4px 0px rgba(0,0,0,0.1);
}
.btn-circular:active {
    transform: translateY(2px);
    box-shadow: 0 2px 0px rgba(0,0,0,0.1);
}

.btn-sonido {
    font-size: 1.4rem;
    background: #f1f5f9;
    border: 3px solid #cbd5e1;
    border-radius: 50%;
    width: 44px;
    height: 44px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s;
    box-shadow: 0 4px 0px rgba(0,0,0,0.1);
}
.btn-sonido:active {
    transform: translateY(2px);
    box-shadow: 0 2px 0px rgba(0,0,0,0.1);
}

/* HUD ESTADISTICAS */
.hud-stats {
    display: flex;
    align-items: center;
    gap: 12px;
}

/* CONTENEDOR DE CORAZONES DINÁMICOS */
.contenedor-corazones {
    display: flex;
    gap: 6px;
    background: #fff0f3;
    padding: 6px 12px;
    border-radius: 20px;
    border: 3px solid #ffccd5;
    box-shadow: inset 0 2px 4px rgba(0,0,0,0.05);
}

.slot-corazon {
    font-size: 1.8rem;
    position: relative;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
    transition: transform 0.3s;
}

/* Animación de caída por gravedad cuando se pierde una vida */
.corazon-cayendo {
    animation: caerGravedad 1s forwards cubic-bezier(0.25, 0.46, 0.45, 0.94);
    z-index: 99;
}

@keyframes caerGravedad {
    0% {
        transform: translateY(0) scale(1) rotate(0deg);
        opacity: 1;
    }
    15% {
        transform: translateY(-25px) scale(1.3) rotate(-15deg);
    }
    30% {
        transform: translateY(-10px) scale(1.2) rotate(15deg);
    }
    100% {
        transform: translateY(500px) scale(0.6) rotate(180deg);
        opacity: 0;
    }
}

/* Animación de regeneración o retorno suave */
.corazon-recuperando {
    animation: recuperarFlotando 1s forwards ease-out;
}

@keyframes recuperarFlotando {
    0% {
        transform: scale(0) translateY(100px);
        opacity: 0;
    }
    60% {
        transform: scale(1.4) translateY(-10px);
        opacity: 1;
    }
    100% {
        transform: scale(1) translateY(0);
    }
}

/* MARCADOR DE MONEDAS */
.marcador-monedas {
    display: flex;
    align-items: center;
    gap: 6px;
    background: #fef9c3;
    border: 3px solid #fde047;
    border-radius: 20px;
    padding: 4px 12px;
    font-weight: 900;
    color: #a16207;
    font-size: 1.1rem;
    box-shadow: 0 3px 0px rgba(0,0,0,0.05);
}

.moneda-emoji {
    font-size: 1.4rem;
    display: inline-block;
    animation: girarMoneda 4s infinite linear;
}

@keyframes girarMoneda {
    0%, 100% { transform: rotateY(0deg); }
    50% { transform: rotateY(180deg); }
}

/* --- MONEDAS DE RECOMPENSA VOLADORAS --- */
.moneda-voladora {
    position: fixed;
    pointer-events: none;
    z-index: 100;
    font-weight: 900;
    font-size: 2rem;
    color: #eab308;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
    animation: volarMonedaUp 1s forwards cubic-bezier(0.1, 0.8, 0.3, 1);
}

@keyframes volarMonedaUp {
    0% {
        opacity: 1;
        transform: translate(-50%, -50%) scale(1) rotate(0deg);
    }
    100% {
        opacity: 0;
        transform: translate(-50%, -180px) scale(1.8) rotate(360deg);
    }
}

/* --- PANTALLAS DE CONTENIDO --- */
.pantalla {
    background: rgba(255, 255, 255, 0.95);
    border-radius: 32px;
    padding: 24px;
    border: 6px solid #e2e8f0;
    box-shadow: 0 16px 32px rgba(0, 0, 0, 0.08);
    margin-bottom: 20px;
    animation: aparecerSuave 0.4s ease-out;
}

@keyframes aparecerSuave {
    0% { opacity: 0; transform: translateY(15px); }
    100% { opacity: 1; transform: translateY(0); }
}

.escondido {
    display: none !important;
}

.encabezado-pantalla {
    text-align: center;
    margin-bottom: 24px;
}
.encabezado-pantalla h2 {
    font-size: 2.2rem;
    font-weight: 900;
    color: var(--color-primaria-morado);
    margin-bottom: 8px;
}
.encabezado-pantalla h3 {
    font-size: 1.8rem;
    font-weight: 900;
    color: var(--color-primaria-azul);
    margin-bottom: 6px;
}
.encabezado-pantalla p {
    color: #64748b;
    font-size: 1.1rem;
    font-weight: 700;
}

/* --- SELECCIÓN DE AVATAR (PANTALLA 1) --- */
.grid-avatars {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
}
@media (min-width: 600px) {
    .grid-avatars {
        grid-template-columns: repeat(4, 1fr);
    }
}

.tarjeta-avatar {
    background: white;
    border-radius: 24px;
    padding: 20px;
    border: 4px solid #e2e8f0;
    cursor: pointer;
    text-align: center;
    transition: all 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    box-shadow: 0 8px 0px #e2e8f0;
}
.tarjeta-avatar:hover {
    transform: translateY(-6px);
}
.tarjeta-avatar:active {
    transform: translateY(2px);
    box-shadow: 0 2px 0px #e2e8f0;
}

.avatar-emoji {
    font-size: 4.5rem;
    display: block;
    margin-bottom: 10px;
    transition: transform 0.2s;
}
.tarjeta-avatar:hover .avatar-emoji {
    transform: scale(1.15) rotate(5deg);
}

.avatar-nombre {
    font-size: 1.2rem;
    font-weight: 900;
    color: #1e293b;
}

/* Estilos de color para avatares */
.avatar-dog { background: #fef3c7; border-color: #f59e0b; box-shadow: 0 8px 0px #f59e0b; }
.avatar-kitty { background: #fce7f3; border-color: #ec4899; box-shadow: 0 8px 0px #ec4899; }
.avatar-bunny { background: #e0f2fe; border-color: #0ea5e9; box-shadow: 0 8px 0px #0ea5e9; }
.avatar-fox { background: #ffedd5; border-color: #f97316; box-shadow: 0 8px 0px #f97316; }

/* --- COMPAÑERO / BANNER (PANTALLA MATERIAS) --- */
.banner-companero {
    display: flex;
    align-items: center;
    gap: 16px;
    background: white;
    border-radius: 24px;
    padding: 16px;
    border: 4px solid #fed7aa;
    margin-bottom: 24px;
    box-shadow: 0 6px 0px rgba(0,0,0,0.03);
}

.avatar-burbuja {
    font-size: 4rem;
    width: 85px;
    height: 85px;
    border-radius: 50%;
    background: #ffedd5;
    border: 4px solid #f97316;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 6px rgba(0,0,0,0.05);
}

.globo-dialogo {
    position: relative;
    flex-1: 1;
    background: #fffbeb;
    border: 3px solid #fde047;
    border-radius: 20px;
    padding: 12px 18px;
}
.globo-dialogo p {
    font-size: 1.15rem;
    font-weight: 900;
    color: #451a03;
    line-height: 1.4;
}

.racha-aviso {
    display: inline-block;
    margin-top: 6px;
    font-size: 0.9rem;
    font-weight: 900;
    color: #c2410c;
    animation: sacudirRacha 1.5s infinite alternate;
}

@keyframes sacudirRacha {
    0% { transform: scale(1); }
    100% { transform: scale(1.08) rotate(2deg); }
}

/* --- MENÚ DE MATERIAS (PANTALLA 2) --- */
.grid-materias {
    display: grid;
    grid-template-columns: 1fr;
    gap: 16px;
}
@media (min-width: 600px) {
    .grid-materias {
        grid-template-columns: repeat(2, 1fr);
    }
}

.tarjeta-materia {
    background: white;
    border-radius: 24px;
    padding: 20px;
    border: 4px dashed #cbd5e1;
    display: flex;
    align-items: flex-start;
    gap: 16px;
    cursor: pointer;
    text-align: left;
    transition: all 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.15);
    position: relative;
    box-shadow: 0 8px 0px rgba(0,0,0,0.02);
}
.tarjeta-materia:hover {
    transform: translateY(-4px) scale(1.01);
}
.tarjeta-materia:active {
    transform: translateY(1px);
}

.materia-icono-box {
    font-size: 2.8rem;
    padding: 12px;
    border-radius: 20px;
    color: white;
    box-shadow: 0 4px 10px rgba(0,0,0,0.1);
    transition: transform 0.3s;
}
.tarjeta-materia:hover .materia-icono-box {
    transform: rotate(12deg) scale(1.1);
}

.materia-info h4 {
    font-size: 1.35rem;
    font-weight: 900;
    color: #1e293b;
    margin-bottom: 2px;
    display: flex;
    align-items: center;
    gap: 6px;
}
.materia-info p {
    font-size: 0.95rem;
    color: #64748b;
    font-weight: 700;
    line-height: 1.3;
}
.materia-meta {
    font-size: 0.85rem;
    color: #d97706;
    font-weight: 900;
    margin-top: 6px;
    display: flex;
    align-items: center;
    gap: 4px;
}

/* Colores de materias */
.materia-matematicas .materia-icono-box { background-color: var(--color-primaria-verde); }
.materia-matematicas:hover { border-color: var(--color-primaria-verde); }
.materia-espanol .materia-icono-box { background-color: var(--color-primaria-amarillo); }
.materia-espanol:hover { border-color: var(--color-primaria-amarillo); }
.materia-ingles .materia-icono-box { background-color: var(--color-primaria-azul); }
.materia-ingles:hover { border-color: var(--color-primaria-azul); }
.materia-ciencias .materia-icono-box { background-color: var(--color-primaria-rosa); }
.materia-ciencias:hover { border-color: var(--color-primaria-rosa); }

.medalla-ganada-visto {
    position: absolute;
    top: 8px;
    right: 8px;
    font-size: 1.6rem;
    animation: flotarMedallaMini 2s infinite alternate ease-in-out;
}
@keyframes flotarMedallaMini {
    0% { transform: translateY(0); }
    100% { transform: translateY(-4px) scale(1.1); }
}

/* PANEL LOGROS */
.panel-logros {
    background: #f8fafc;
    border: 4px dashed #cbd5e1;
    border-radius: 24px;
    padding: 16px 20px;
    margin-top: 24px;
}
.panel-logros h4 {
    font-size: 1.15rem;
    font-weight: 900;
    color: var(--color-primaria-morado);
    margin-bottom: 12px;
    text-align: center;
}
.lista-medallas {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    justify-content: center;
}
.lista-medallas .texto-vacio {
    font-size: 0.95rem;
    color: #94a3b8;
    font-weight: 700;
}

.medalla-item {
    background: #fffdf5;
    border: 2px solid #fef08a;
    border-radius: 16px;
    padding: 8px 14px;
    display: flex;
    align-items: center;
    gap: 8px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.03);
}
.medalla-item .medalla-ico { font-size: 1.6rem; }
.medalla-item .medalla-lbl {
    font-size: 0.85rem;
    font-weight: 900;
    color: #854d0e;
    line-height: 1.2;
}

.acciones-menu {
    display: flex;
    justify-content: center;
    margin-top: 20px;
}

/* --- ÁREA DE JUEGO (PANTALLA 3) --- */
.barra-progreso-contenedor {
    display: flex;
    align-items: center;
    gap: 12px;
    background: #f8fafc;
    border: 4px solid #e2e8f0;
    border-radius: 20px;
    padding: 10px 16px;
    margin-bottom: 20px;
}
.barra-progreso-contenedor span {
    font-size: 1rem;
    font-weight: 900;
    color: var(--color-primaria-azul);
    white-space: nowrap;
}

.progreso-fondo {
    flex-1: 1;
    height: 18px;
    background: #e2e8f0;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: inset 0 2px 4px rgba(0,0,0,0.05);
}
.progreso-lleno {
    height: 100%;
    width: 0%;
    background: var(--color-primaria-verde);
    border-radius: 10px;
    transition: width 0.4s ease;
}

.meta-emoji {
    font-size: 1.5rem;
}

/* TARJETA DE PREGUNTA */
.tarjeta-pregunta {
    background: white;
    border: 4px solid #cbd5e1;
    border-radius: 28px;
    padding: 20px 24px;
    position: relative;
    box-shadow: 0 10px 20px rgba(0,0,0,0.03);
}

.categoria-badge {
    position: absolute;
    top: -16px;
    left: 24px;
    background: var(--color-primaria-azul);
    color: white;
    font-size: 0.85rem;
    font-weight: 900;
    padding: 6px 14px;
    border-radius: 12px;
    border-bottom: 4px solid rgba(0,0,0,0.15);
}

#textoPregunta {
    font-size: 1.7rem;
    font-weight: 900;
    color: #1e293b;
    margin-top: 10px;
    margin-bottom: 20px;
    line-height: 1.35;
}

/* Área de apoyo gráfico */
.apoyo-visual {
    background: #f1f5f9;
    padding: 16px;
    border-radius: 20px;
    text-align: center;
    font-size: 3rem;
    letter-spacing: 12px;
    margin-bottom: 24px;
    border: 2px dashed #cbd5e1;
    user-select: none;
    animation: flotarSutil 3s infinite alternate ease-in-out;
}

@keyframes flotarSutil {
    0% { transform: translateY(0); }
    100% { transform: translateY(-6px); }
}

/* OPCIONES */
.grid-opciones {
    display: grid;
    grid-template-columns: 1fr;
    gap: 14px;
}
@media (min-width: 500px) {
    .grid-opciones {
        grid-template-columns: repeat(2, 1fr);
    }
}

.btn-opcion {
    background: #f8fafc;
    border: 4px solid #cbd5e1;
    border-bottom: 8px solid #cbd5e1;
    border-radius: 20px;
    padding: 16px 20px;
    font-size: 1.25rem;
    font-weight: 900;
    color: #475569;
    cursor: pointer;
    transition: all 0.1s;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
}
.btn-opcion:hover:not(:disabled) {
    background: #fffbeb;
    border-color: var(--color-primaria-amarillo);
}
.btn-opcion:active:not(:disabled) {
    transform: translateY(4px);
    border-bottom-width: 4px;
}

/* Clases de respuesta correctas/incorrectas */
.btn-opcion.correcta {
    background: var(--color-primaria-verde) !important;
    color: white !important;
    border-color: #409231 !important;
    border-bottom-color: #2a6a1f !important;
    transform: scale(1.02);
}
.btn-opcion.incorrecta {
    background: var(--color-primaria-rojo) !important;
    color: white !important;
    border-color: #d13f3f !important;
    border-bottom-color: #9d2525 !important;
    animation: sacudirCard 0.4s;
}

@keyframes sacudirCard {
    0%, 100% { transform: translateX(0); }
    20%, 60% { transform: translateX(-8px); }
    40%, 80% { transform: translateX(8px); }
}

/* PANEL EXPLICACIÓN */
.panel-explicacion {
    margin-top: 24px;
    border-radius: 20px;
    padding: 20px;
    border: 4px solid;
    animation: deslizarExplicacion 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

@keyframes deslizarExplicacion {
    0% { opacity: 0; transform: translateY(10px); }
    100% { opacity: 1; transform: translateY(0); }
}

.panel-explicacion.acierto {
    background: #f0fdf4;
    border-color: #86efac;
    color: #166534;
}
.panel-explicacion.fallo {
    background: #fef2f2;
    border-color: #fca5a5;
    color: #991b1b;
}

.panel-explicacion h4 {
    font-size: 1.35rem;
    font-weight: 900;
    margin-bottom: 6px;
}
.panel-explicacion p {
    font-size: 1.05rem;
    font-weight: 700;
    line-height: 1.4;
    margin-bottom: 14px;
}

.acciones-explicacion {
    display: flex;
    justify-content: flex-end;
}

/* --- BOTONES DE ACCIÓN --- */
.btn-principal {
    background: linear-gradient(185deg, #a78bfa, var(--color-primaria-morado));
    color: white;
    border: none;
    border-bottom: 6px solid #6d28d9;
    border-radius: 20px;
    padding: 14px 28px;
    font-size: 1.15rem;
    font-weight: 900;
    cursor: pointer;
    transition: all 0.1s;
    box-shadow: 0 4px 6px rgba(0,0,0,0.05);
}
.btn-principal:hover {
    transform: translateY(-2px);
}
.btn-principal:active {
    transform: translateY(3px);
    border-bottom-width: 3px;
}

.btn-secundario {
    background: #f1f5f9;
    color: #475569;
    border: 3px solid #cbd5e1;
    border-bottom: 6px solid #cbd5e1;
    border-radius: 16px;
    padding: 10px 20px;
    font-size: 0.95rem;
    font-weight: 900;
    cursor: pointer;
    transition: all 0.1s;
}
.btn-secundario:active {
    transform: translateY(3px);
    border-bottom-width: 3px;
}

.btn-enlace {
    background: none;
    border: none;
    color: #64748b;
    font-weight: 700;
    text-decoration: underline;
    font-size: 0.95rem;
    cursor: pointer;
    padding: 6px;
}
.btn-enlace:hover {
    color: #334155;
}

/* --- GAME OVER Y PANTALLA VICTORIA (TARJETAS GRANDES) --- */
.tarjeta-alerta {
    text-align: center;
    padding: 20px 10px;
}

.emoji-celebracion {
    font-size: 5.5rem;
    margin-bottom: 20px;
    display: block;
    animation: flotarEnojado 2s infinite alternate ease-in-out;
}
@keyframes flotarEnojado {
    0% { transform: translateY(0); }
    100% { transform: translateY(-12px); }
}

.tarjeta-alerta h2 {
    font-size: 2.2rem;
    font-weight: 900;
    margin-bottom: 12px;
}
.tarjeta-alerta.error h2 { color: var(--color-primaria-rojo); }
.tarjeta-alerta.victoria h2 { color: #d97706; }

.tarjeta-alerta p {
    font-size: 1.15rem;
    font-weight: 700;
    color: #64748b;
    max-width: 500px;
    margin: 0 auto 24px;
    line-height: 1.4;
}

.btn-grande {
    font-size: 1.3rem;
    padding: 18px 36px;
    border-radius: 24px;
}

/* PREMIOS RESUMEN */
.premios-resumen {
    display: flex;
    justify-content: center;
    gap: 16px;
    margin-bottom: 24px;
}
.premio-card {
    background: #fffbeb;
    border: 3px solid #fef08a;
    border-radius: 20px;
    padding: 16px 20px;
    width: 120px;
    text-align: center;
}
.premio-icono {
    font-size: 2.5rem;
    margin-bottom: 4px;
}
.premio-cantidad {
    font-size: 1.4rem;
    font-weight: 900;
    color: #854d0e;
}
.premio-nombre {
    font-size: 0.8rem;
    color: #a16207;
    font-weight: 700;
}

.medalla-animada {
    animation: vibrarOro 1.5s infinite alternate ease-in-out;
}
@keyframes vibrarOro {
    0% { transform: scale(1); }
    100% { transform: scale(1.08) rotate(3deg); }
}

.acciones-victoria {
    display: flex;
    flex-direction: column;
    gap: 12px;
    align-items: center;
    justify-content: center;
}
@media (min-width: 500px) {
    .acciones-victoria {
        flex-direction: row;
    }
}

/* --- PIE DE PÁGINA --- */
footer {
    text-align: center;
    margin-top: 30px;
    font-size: 0.85rem;
    color: #64748b;
    font-weight: 700;
    padding: 12px;
    background: rgba(255, 255, 255, 0.6);
    border-radius: 16px;
    border: 2px dashed rgba(0, 0, 0, 0.08);
}
    </style>
</head>
<body>
    <!-- Nubes y globos flotantes decorativos de fondo -->
    <div class="decoracion-nube" style="top: 10%; left: 5%;">☁️</div>
    <div class="decoracion-nube" style="top: 25%; right: 8%;">☁️</div>
    <div class="decoracion-globo" style="bottom: 15%; left: 8%;">🎈</div>
    <div class="decoracion-globo" style="bottom: 30%; right: 6%;">⭐</div>

    <div class="app-container">
        <!-- BARRA SUPERIOR (HUD) -->
        <header class="barra-superior">
            <div class="seccion-izquierda">
                <button id="btnVolver" class="btn-circular escondido" onclick="volverAlMenu()">⬅️</button>
                <div class="titulo-app">
                    <span class="emoji-logo">🎒</span>
                    <h1>Aprende Jugando</h1>
                </div>
            </div>

            <div class="hud-stats">
                <!-- Contenedor de corazones con soporte para animaciones -->
                <div class="contenedor-corazones" id="corazonesHud">
                    <div class="slot-corazon" id="slot-1">❤️</div>
                    <div class="slot-corazon" id="slot-2">❤️</div>
                    <div class="slot-corazon" id="slot-3">❤️</div>
                </div>

                <!-- Indicador de Monedas -->
                <div class="marcador-monedas">
                    <span class="moneda-emoji">🪙</span>
                    <span id="contadorMonedas">100</span>
                </div>

                <!-- Botón de Sonido -->
                <button id="btnSonido" class="btn-sonido" onclick="alternarSonido()" title="Activar/Desactivar Sonido">🔊</button>
            </div>
        </header>

        <main class="pantalla-principal">
            
            <!-- PANTALLA 1: SELECCIÓN DE AVATAR -->
            <section id="pantallaAvatar" class="pantalla">
                <div class="encabezado-pantalla">
                    <h2>✨ ¡Hola Amiguito! ✨</h2>
                    <p>Elige a tu compañero de aventuras para jugar y aprender hoy:</p>
                </div>
                <div class="grid-avatars" id="gridAvatars">
                    <!-- Los avatares se generan por JS -->
                </div>
            </section>

            <!-- PANTALLA 2: SELECCIÓN DE MATERIAS (MENÚ) -->
            <section id="pantallaMaterias" class="pantalla escondido">
                
                <!-- Banner del compañero activo -->
                <div class="banner-companero">
                    <div class="avatar-burbuja" id="avatarBurbuja">🐶</div>
                    <div class="globo-dialogo">
                        <div class="triangulo-globo"></div>
                        <p id="textoCompanero">¡Hola! Estoy listo para aprender contigo. ¡Guau!</p>
                        <div id="notificacionRacha" class="racha-aviso escondido">🔥 ¡Llevas una racha de respuestas correctas!</div>
                    </div>
                </div>

                <div class="encabezado-pantalla">
                    <h3>¿Qué quieres aprender y jugar hoy? 🎮</h3>
                    <p>Selecciona una materia divertida para iniciar tus retos:</p>
                </div>

                <div class="grid-materias" id="gridMaterias">
                    <!-- Las materias se generan por JS -->
                </div>

                <!-- Sala de trofeos/medallas del estudiante -->
                <div class="panel-logros">
                    <h4>Mis Medallas de Primaria 🏆</h4>
                    <div class="lista-medallas" id="listaMedallas">
                        <p class="texto-vacio">¡Completa materias con éxito para ganar medallas de oro!</p>
                    </div>
                </div>

                <div class="acciones-menu">
                    <button class="btn-secundario" onclick="reiniciarProgreso()">🔄 Reiniciar todo mi progreso</button>
                </div>
            </section>

            <!-- PANTALLA 3: ÁREA DE JUEGO / RETOS -->
            <section id="pantallaJuego" class="pantalla escondido">
                <!-- Barra de progreso de la materia -->
                <div class="barra-progreso-contenedor">
                    <span id="textoProgreso">Pregunta 1 de 5</span>
                    <div class="progreso-fondo">
                        <div class="progreso-lleno" id="progresoBarra"></div>
                    </div>
                    <span class="meta-emoji">🏆</span>
                </div>

                <!-- Zona del reto -->
                <div class="tarjeta-pregunta" id="tarjetaPregunta">
                    <div class="categoria-badge" id="badgeCategoria">MATEMÁTICAS</div>
                    <h3 id="textoPregunta">¿Cuánto es 2 + 2?</h3>
                    
                    <!-- Área para apoyo visual (Ej: manzanas, plátanos, etc.) -->
                    <div class="apoyo-visual" id="apoyoVisual">🍎 🍎 + 🍎 🍎</div>

                    <!-- Cuadrícula de respuestas -->
                    <div class="grid-opciones" id="gridOpciones">
                        <!-- Botones de opciones generados por JS -->
                    </div>

                    <!-- Tarjeta de explicación y retroalimentación -->
                    <div class="panel-explicacion escondido" id="panelExplicacion">
                        <h4 id="tituloExplicacion">🎉 ¡Excelente Trabajo!</h4>
                        <p id="textoExplicacion">¡Muy bien hecho! 2 más 2 son 4 manzanas en total.</p>
                        <div class="acciones-explicacion">
                            <button id="btnSiguiente" class="btn-principal" onclick="irASiguientePregunta()">¡Siguiente Reto! ➡️</button>
                        </div>
                    </div>
                </div>
            </section>

            <!-- PANTALLA 4: FIN DEL JUEGO / SIN CORAZONES -->
            <section id="pantallaGameOver" class="pantalla escondido">
                <div class="tarjeta-alerta error">
                    <div class="emoji-celebracion">🩹❤️🪄</div>
                    <h2>¡Oh no! ¡Te quedaste sin corazones!</h2>
                    <p>Tus corazones se cansaron de saltar y volaron a descansar. ¡Pero no te preocupes! Tu compañero te regala energía mágica.</p>
                    <button class="btn-principal btn-grande" onclick="recuperarCorazones()">❤️ ¡Reactivar mis Corazones Mágicos!</button>
                    <button class="btn-enlace" onclick="volverAlMenu()">Volver al menú de materias</button>
                </div>
            </section>

            <!-- PANTALLA 5: CELEBRACIÓN DE MATERIA COMPLETADA -->
            <section id="pantallaVictoria" class="pantalla escondido">
                <div class="tarjeta-alerta victoria">
                    <div class="emoji-celebracion">👑🥇🌟</div>
                    <h2 id="tituloVictoria">¡Lección Completada!</h2>
                    <p>¡Eres un súper experto! Tu compañero está dando vueltas de alegría.</p>
                    
                    <div class="premios-resumen">
                        <div class="premio-card">
                            <div class="premio-icono">🪙</div>
                            <div class="premio-cantidad">+50</div>
                            <div class="premio-nombre">Monedas</div>
                        </div>
                        <div class="premio-card medalla-animada">
                            <div class="premio-icono">🥇</div>
                            <div class="premio-cantidad">Oro</div>
                            <div class="premio-nombre">Medalla</div>
                        </div>
                    </div>

                    <div class="acciones-victoria">
                        <button class="btn-principal" onclick="volverAlMenu()">🗺️ Ver otras materias</button>
                        <button class="btn-secundario" onclick="repetirMateria()">🔄 Repetir materia</button>
                    </div>
                </div>
            </section>

        </main>

        <footer>
            <p>✨ Creado con mucho amor para niños de Primero y Segundo de Primaria • ¡Aprende Jugando! ✨</p>
        </footer>
    </div>

    <!-- Script de lógica interactiva -->
    <script>
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
    </script>
</body>
</html>
