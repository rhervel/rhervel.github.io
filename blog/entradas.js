const articles = [
{
id: 1,
category: "hardware",
categoryLabel: "2º ESO • Robótica",
categoryLabel_en: "8th Grade • Robotics",
title: "Iniciación a Arduino y Mecatrónica: Tu primer proyecto con sensores",
title_en: "Introduction to Arduino & Mechatronics: Your First Sensor Project",
intro: "Aprende los fundamentos de los microcontroladores programando un sistema automático de riego con Arduino UNO y sensores de humedad.",
intro_en: "Learn microcontroller basics by programming an automated irrigation system with Arduino UNO and moisture sensors.",
image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
gridClass: "md:col-span-8",
content: `
<p class="lead">En 2º de la ESO, la intersección entre el hardware y la programación se materializa a través de la robótica educativa. Con un microcontrolador como <strong>Arduino UNO</strong>, podemos interactuar con el mundo físico leyendo datos del entorno y ejecutando acciones mecánicas o eléctricas.</p>

<h3>1. ¿Qué es una placa de desarrollo?</h3>
<p>Arduino es una plataforma de código abierto compuesta por entradas analógicas/digitales y salidas. Permite conectar sensores (como fotorresistencias LDR, ultrasonidos o sensores de humedad del suelo) y actuadores (servomotores, LEDs, relés, zumbadores).</p>

<h3>2. Proyecto práctico: Sistema de Riego Automatizado</h3>
<p>El objetivo es medir la humedad del suelo mediante un sensor resistivo. Si la humedad cae por debajo de un umbral prefijado, la placa activará un relé para poner en marcha una pequeña bomba de agua.</p>

            <pre><code>// Código en Arduino C++
    int sensorPin = A0;
    int relePin = 8;
    int umbralHumedad = 400;
    void setup() {
      pinMode(relePin, OUTPUT);
      Serial.begin(9600);
    }
    void loop() {
      int lectura = analogRead(sensorPin);
      Serial.println(lectura);
      
      if (lectura > umbralHumedad) { // Suelo seco
        digitalWrite(relePin, HIGH); // Activa el riego
      } else {
        digitalWrite(relePin, LOW);  // Apaga el riego
      }
      delay(1000);
}</code></pre>
<h3>3. Conclusiones y Aplicaciones Reales</h3>
<p>Este mismo esquema conceptual es el que utilizan las explotaciones agrícolas domotizadas para optimizar el consumo de agua mediante la tecnología IoT (Internet de las Cosas).</p>
`,
content_en: `
<p class="lead">In 8th grade, the intersection between hardware and programming is materialized through educational robotics. Using a microcontroller like <strong>Arduino UNO</strong>, we can interact with the physical world by reading environment data and triggering mechanical or electrical actions.</p>

<h3>1. What is a Development Board?</h3>
<p>Arduino is an open-source platform consisting of analog/digital inputs and outputs. It allows connecting sensors (such as LDR light sensors, ultrasonic distance sensors, or soil moisture meters) and actuators (servos, LEDs, relays, buzzers).</p>
<h3>2. Hands-on Project: Automated Irrigation System</h3>
<p>The goal is to measure soil moisture using a resistive sensor. If moisture drops below a predefined threshold, the board triggers a relay to turn on a small water pump.</p>
            <pre><code>// Arduino C++ Code
    int sensorPin = A0;
    int relePin = 8;
    int umbralHumedad = 400;
    void setup() {
      pinMode(relePin, OUTPUT);
      Serial.begin(9600);
    }
    void loop() {
      int lectura = analogRead(sensorPin);
      Serial.println(lectura);
      
      if (lectura > umbralHumedad) { // Dry soil
        digitalWrite(relePin, HIGH); // Turn irrigation ON
      } else {
        digitalWrite(relePin, LOW);  // Turn irrigation OFF
      }
      delay(1000);
}</code></pre>
<h3>3. Real-World Applications</h3>
<p>This identical conceptual framework is used in modern smart farming to optimize water consumption through IoT (Internet of Things) technology.</p>
`
},
{
id: 2,
category: "desarrollo",
categoryLabel: "2º ESO • Hojas de Cálculo",
categoryLabel_en: "8th Grade • Spreadsheets",
title: "Tratamiento de Datos y Hojas de Cálculo: Automatizando Presupuestos",
title_en: "Data Processing and Spreadsheets: Automating Budgets",
intro: "Aprende a estructurar datos, aplicar fórmulas matemáticas, condicionales y gráficos para analizar proyectos tecnológicos.",
intro_en: "Learn to structure data, apply mathematical and conditional formulas, and build charts to analyze engineering projects.",
image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
gridClass: "md:col-span-4",
content: `
<p class="lead">Las hojas de cálculo (Google Sheets o Microsoft Excel) son herramientas esenciales en la fase de gestión y viabilidad económica de cualquier proyecto técnico.</p>

<h3>Fórmulas clave en la ESO</h3>
<ul>
    <li><code>=SUMA(A1:A10)</code>: Suma de rangos continuos.</li>
    <li><code>=PROMEDIO(B1:B20)</code>: Media aritmética de valores.</li>
    <li><code>=SI(C2>=5; "APROBADO"; "SUSPENSO")</code>: Lógica condicional básica.</li>
    <li><code>=BUSCARV(D2; A1:B100; 2; FALSO)</code>: Búsqueda de registros en tablas estructuradas.</li>
</ul>
<h3>Visualización de Datos</h3>
<p>Representar la información gráficamente mediante diagramas de barras o sectores facilita la toma de decisiones al visualizar inmediatamente tendencias o desviaciones presupuestarias.</p>
`,
content_en: `
<p class="lead">Spreadsheets (Google Sheets or Microsoft Excel) are core tools during the planning and financial analysis phases of any engineering project.</p>

<h3>Key Formulas in Middle School</h3>
<ul>
    <li><code>=SUM(A1:A10)</code>: Sums values over a continuous range.</li>
    <li><code>=AVERAGE(B1:B20)</code>: Calculates the arithmetic mean.</li>
    <li><code>=IF(C2>=5; "PASS"; "FAIL")</code>: Basic conditional logic.</li>
    <li><code>=VLOOKUP(D2; A1:B100; 2; FALSE)</code>: Search for records in structured tables.</li>
</ul>
<h3>Data Visualization</h3>
<p>Displaying data visually through bar charts or pie graphs simplifies decision-making by revealing trends and budget variances instantly.</p>
`
},
{
id: 3,
category: "tendencias",
categoryLabel: "2º ESO • Diseño y Edición",
categoryLabel_en: "8th Grade • Design & Media",
title: "Creación Multimedia: De la Ilustración Vectorial a la Edición de Vídeo",
title_en: "Multimedia Creation: From Vector Graphics to Video Editing",
intro: "Técnicas de diseño gráfico vectorial con Inkscape y montaje multimedia para la presentación de proyectos técnicos.",
intro_en: "Vector design techniques with Inkscape and video editing tools to showcase technical projects.",
image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=800&q=80",
gridClass: "md:col-span-4",
content: `
<p class="lead">Saber comunicar un proyecto técnico es tan relevante como su diseño físico. La creación de documentación multimedia atractiva requiere dominar el diseño vectorial y el montaje audiovisual.</p>

<h3>Diseño Vectorial vs. Bitmap</h3>
<p>A diferencia de las imágenes rasterizadas (JPEG/PNG) compuestas por píxeles, las imágenes vectoriales (SVG) se basan en coordenadas matemáticas. Esto permite escalarlas a cualquier tamaño sin perder nitidez, siendo ideales para logotipos y planos de fabricación.</p>
<h3>Fases de Producción Audiovisual</h3>
<ol>
    <li><strong>Preproducción:</strong> Guion técnico y escaleta.</li>
    <li><strong>Producción:</strong> Grabación de clips de vídeo y locución de audio.</li>
    <li><strong>Postproducción:</strong> Montaje, inserción de rótulos, cortes limpios y exportación multiformato.</li>
</ol>
`,
content_en: `
<p class="lead">Knowing how to communicate a technical project effectively is as crucial as designing it. Producing engaging multimedia documentation requires mastering vector design and video editing.</p>

<h3>Vector Graphics vs. Bitmaps</h3>
<p>Unlike raster images (JPEG/PNG) built from pixels, vector graphics (SVG) rely on mathematical formulas. This guarantees lossless scalability to any dimension, making them perfect for logos and blueprints.</p>
<h3>Video Production Stages</h3>
<ol>
    <li><strong>Pre-production:</strong> Scriptwriting and storyboard.</li>
    <li><strong>Production:</strong> Video shooting and audio voiceover.</li>
    <li><strong>Post-production:</strong> Assembly, captions, transitions, and export.</li>
</ol>
`
},
{
id: 4,
category: "hardware",
categoryLabel: "3º ESO • Redes",
categoryLabel_en: "9th Grade • Networking",
title: "Arquitectura de Redes Locales (LAN) y el Modelo TCP/IP",
title_en: "Local Area Network (LAN) Architecture & TCP/IP Model",
intro: "Comprende cómo viajan los paquetes de datos a través de routers, switches, direcciones IP y redes WiFi domésticas.",
intro_en: "Understand how data packets travel across routers, switches, IP addresses, and home WiFi networks.",
image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80",
gridClass: "md:col-span-4",
content: `
<p class="lead">Cada vez que abres una página web o envías un mensaje, miles de paquetes de información recorren una infraestructura compleja coordinada por el protocolo TCP/IP.</p>

<h3>Componentes Hardware de una Red</h3>
<ul>
    <li><strong>Router:</strong> Interconecta diferentes redes (por ejemplo, la red de tu casa con Internet).</li>
    <li><strong>Switch (Conmutador):</strong> Conecta dispositivos dentro de una misma red local mediante cable Ethernet (RJ45).</li>
    <li><strong>Punto de Acceso WiFi:</strong> Emite señales de radiofrecuencia (2.4 GHz / 5 GHz) para la conexión inalámbrica.</li>
</ul>
<h3>Direccionamiento IP y Máscara de Red</h3>
<p>Cada equipo conectado posee una dirección IP única (Ejemplo IPv4: <code>192.168.1.15</code>). Las IPs privadas identifican dispositivos dentro de la LAN, mientras que la IP pública identifica a toda la red frente a Internet.</p>
`,
content_en: `
<p class="lead">Every time you open a website or send a message, thousands of data packets traverse a complex infrastructure managed by the TCP/IP stack.</p>
<h3>Hardware Components of a Network</h3>
<ul>
    <li><strong>Router:</strong> Connects disparate networks (e.g., your home LAN to the Internet).</li>
    <li><strong>Switch:</strong> Connects local devices using physical Ethernet cables (RJ45).</li>
    <li><strong>WiFi Access Point:</strong> Transmits radio signals (2.4 GHz / 5 GHz) for wireless client connection.</li>
</ul>
<h3>IP Addressing & Subnetting</h3>
<p>Every device is assigned a unique IP address (e.g. IPv4: <code>192.168.1.15</code>). Private IPs identify nodes in the local network, while a public IP identifies your network across the global Internet.</p>
`
},
{
id: 5,
category: "ciberseguridad",
categoryLabel: "3º ESO • Seguridad",
categoryLabel_en: "9th Grade • Cybersecurity",
title: "Ciberseguridad y Privacidad: Protección en Entornos Digitales",
title_en: "Cybersecurity & Privacy: Protection in Digital Environments",
intro: "Estrategias esenciales para proteger la identidad digital, prevenir ataques de phishing y securizar contraseñas.",
intro_en: "Essential strategies to protect your digital identity, prevent phishing attacks, and secure passwords.",
image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
gridClass: "md:col-span-4",
content: `
<p class="lead">La digitalización comporta importantes retos éticos y de seguridad. Proteger la huella digital y evitar vulnerabilidades es imprescindible para cualquier ciudadano digital.</p>

<h3>Amenazas Comunes</h3>
<ul>
    <li><strong>Phishing:</strong> Suplantación de identidad mediante correos o mensajería engañosa.</li>
    <li><strong>Malware:</strong> Software malicioso (virus, troyanos, ransomware) diseñado para alterar o robar datos.</li>
    <li><strong>Ingeniería Social:</strong> Manipulación psicológica para obtener credenciales confidenciales.</li>
</ul>
<h3>Buenas Prácticas de Protección</h3>
<p>Uso de gestores de contraseñas, activación obligatoria de la <strong>Autenticación de Doble Factor (2FA)</strong> y verificación metódica del certificado SSL (HTTPS) en los navegadores.</p>
`,
content_en: `
<p class="lead">Digital transformation brings critical safety and ethical challenges. Protecting your digital footprint is vital for modern digital citizens.</p>
<h3>Common Threats</h3>
<ul>
    <li><strong>Phishing:</strong> Identity spoofing via deceptive emails or messaging.</li>
    <li><strong>Malware:</strong> Malicious software (viruses, trojans, ransomware) engineered to steal data.</li>
    <li><strong>Social Engineering:</strong> Psychological manipulation to trick users into handing over credentials.</li>
</ul>
<h3>Best Protection Practices</h3>
<p>Use password managers, mandate <strong>Two-Factor Authentication (2FA)</strong>, and verify HTTPS certificates in browser address bars.</p>
`
},
{
id: 6,
category: "desarrollo",
categoryLabel: "3º ESO • Programación",
categoryLabel_en: "9th Grade • Programming",
title: "Pensamiento Algorítmico: De Diagramas de Flujo a Programación en Bloques",
title_en: "Algorithmic Thinking: From Flowcharts to Block-based Coding",
intro: "Estructuras de control, bucles, condicionales y funciones en Scratch y App Inventor para resolver problemas reales.",
intro_en: "Control structures, loops, conditionals, and functions in Scratch and App Inventor for problem solving.",
image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
gridClass: "md:col-span-4",
content: `
<p class="lead">Antes de escribir código textual, es crucial desarrollar la competencia de resolución algorítmica: dividir problemas complejos en subproblemas secuenciales más sencillos.</p>
<h3>Estructuras de Control Fundamentales</h3>
<ol>
    <li><strong>Secuencia:</strong> Ejecución lineal de instrucciones ordenadas.</li>
    <li><strong>Selección (Condicionantes):</strong> Toma de decisiones mediante estructuras <code>IF...THEN...ELSE</code>.</li>
    <li><strong>Iteración (Bucles):</strong> Repetición de bloques de código mientras se cumpla una condición (<code>WHILE</code>, <code>FOR</code>).</li>
</ol>
<p>Herramientas como <strong>MIT App Inventor</strong> permiten trasladar estos lógica en bloques hacia la creación de aplicaciones nativas para dispositivos móviles Android aprovechando sensores como el acelerómetro o el GPS.</p>
`,
content_en: `
<p class="lead">Before writing raw text code, developing algorithmic thinking skills is crucial: breaking down complex problems into manageable sequential steps.</p>
<h3>Core Control Structures</h3>
<ol>
    <li><strong>Sequence:</strong> Step-by-step linear execution of code.</li>
    <li><strong>Selection (Conditionals):</strong> Branching logic using <code>IF...THEN...ELSE</code> blocks.</li>
    <li><strong>Iteration (Loops):</strong> Repeating code blocks based on conditions (<code>WHILE</code>, <code>FOR</code>).</li>
</ol>
<p>Platforms like <strong>MIT App Inventor</strong> bridge block coding with native Android smartphone app deployment using device sensors like accelerometers or GPS.</p>
`
},
{
id: 7,
category: "hardware",
categoryLabel: "4º ESO • Modelado 3D",
categoryLabel_en: "10th Grade • 3D Modeling",
title: "Diseño e Impresión 3D: Del CAD (Tinkercad / FreeCAD) a la Fabricación Aditiva",
title_en: "3D Design & Printing: From CAD to Additive Manufacturing",
intro: "Aprende el flujo completo de prototipado 3D: diseño paramétrico, laminado en Ultimaker Cura e impresión en FDM.",
intro_en: "Learn the end-to-end 3D prototyping workflow: CAD modeling, slicers (Cura), and FDM 3D printing.",
image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
gridClass: "md:col-span-8",
content: `
<p class="lead">El diseño asistido por ordenador (CAD) y la fabricación aditiva permiten materializar prototipos físicos directamente desde modelos virtuales en 3D.</p>
<h3>El Flujo de Trabajo en Impresión 3D</h3>
<ol>
    <li><strong>Modelado CAD:</strong> Creación de la geometría volumétrica (en Tinkercad o FreeCAD) y exportación a formato <code>.STL</code>.</li>
    <li><strong>Laminado (Slicing):</strong> Procesamiento del archivo STL con herramientas como Cura para generar el código de máquina (G-Code). Parámetros clave: altura de capa, relleno (infill) y soportes.</li>
    <li><strong>Impresión FDM:</strong> Extrusión termoplástica capa a capa utilizando materiales como PLA o PETG.</li>
</ol>
`,
content_en: `
<p class="lead">Computer-Aided Design (CAD) and additive manufacturing enable turning virtual 3D models directly into functional physical prototypes.</p>
<h3>The 3D Printing Workflow</h3>
<ol>
    <li><strong>CAD Modeling:</strong> Building geometry (Tinkercad or FreeCAD) and exporting to <code>.STL</code> format.</li>
    <li><strong>Slicing:</strong> Processing STL files using Cura to generate machine commands (G-Code). Key settings: layer height, infill, and support structures.</li>
    <li><strong>FDM Printing:</strong> Depositing molten thermoplastic layer-by-layer (commonly PLA or PETG).</li>
</ol>
`
},
{
id: 8,
category: "desarrollo",
categoryLabel: "4º ESO • Bases de Datos",
categoryLabel_en: "10th Grade • Databases",
title: "Bases de Datos Relacionales y Consultas SQL",
title_en: "Relational Databases & SQL Queries",
intro: "Estructuración de información mediante tablas, claves primarias, foráneas y consultas en lenguaje SQL.",
intro_en: "Organizing information using relational tables, primary/foreign keys, and standard SQL queries.",
image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80",
gridClass: "md:col-span-4",
content: `
<p class="lead">Las bases de datos son el núcleo invisible de cualquier aplicación moderna, permitiendo almacenar y recuperar información estructurada de forma eficiente.</p>
<h3>Conceptos Fundamentales Relacionales</h3>
<p>La información se organiza en <strong>tablas</strong> compuestas por campos (columnas) y registros (filas). Las relaciones se garantizan mediante Claves Primarias (Primary Keys) y Claves Foráneas (Foreign Keys).</p>
<h3>Consultas Básicas en SQL</h3>
            <pre><code>-- Selección de alumnos aprobados
    SELECT nombre, apellidos, nota 
    FROM alumnos 
    WHERE nota >= 5 
ORDER BY nota DESC;</code></pre>
`,
content_en: `
<p class="lead">Databases form the invisible engine powering software applications, providing structured, reliable, and scalable storage.</p>
<h3>Relational Core Concepts</h3>
<p>Data is organized in <strong>tables</strong> comprising fields (columns) and records (rows). Integrity between tables is enforced via Primary and Foreign Keys.</p>
<h3>Basic SQL Queries</h3>
            <pre><code>-- Select passing students
    SELECT first_name, last_name, grade 
    FROM students 
    WHERE grade >= 5 
ORDER BY grade DESC;</code></pre>
`
},
{
id: 9,
category: "ia",
categoryLabel: "4º ESO • Inteligencia Artificial",
categoryLabel_en: "10th Grade • Artificial Intelligence",
title: "Fundamentos de Inteligencia Artificial y Aprendizaje Automático",
title_en: "Fundamentals of Artificial Intelligence & Machine Learning",
intro: "Introducción a las redes neuronales, entrenamiento de modelos con Teachable Machine y sesgo algorítmico.",
intro_en: "Introduction to neural networks, model training with Teachable Machine, and algorithmic bias.",
image: "https://www.telefonicaempresas.es/grandes-empresas/wp-content/uploads/sites/6/2025/01/ia-cabecera-aspect-ratio-1-1.jpg",
gridClass: "md:col-span-4",
content: `
<p class="lead">La Inteligencia Artificial ha dejado de ser ciencia ficción para convertirse en una competencia técnica básica dentro del currículo de Tecnología y Digitalización.</p>
<h3>¿Cómo aprende una máquina?</h3>
<p>A diferencia de la programación tradicional donde escribimos reglas explícitas, en el <strong>Machine Learning (Aprendizaje Automático)</strong> proporcionamos un conjunto masivo de datos de entrenamiento para que el modelo identifique patrones por sí mismo.</p>
<h3>Práctica: Clasificador de Imágenes</h3>
<p>Utilizando herramientas educativas como Google Teachable Machine, es posible entrenar un modelo capaz de distinguir entre diferentes tipos de residuos (plástico, papel, orgánico) a través de la webcam para automatizar una planta de reciclaje.</p>
<h3>Ética e Inteligencia Artificial</h3>
<p>Es imprescindible analizar los <strong>sesgos algorítmicos</strong>: si los datos de entrenamiento están sesgados o incompletos, los resultados generados por la IA reproducirán y amplificarán esos errores.</p>
`,
content_en: `
<p class="lead">Artificial Intelligence has evolved into a mandatory core topic within secondary technology and digitalization curricula.</p>
<h3>How Do Machines Learn?</h3>
<p>Unlike classical programming where developers code explicit rules, <strong>Machine Learning</strong> relies on providing labeled training datasets so algorithms learn patterns independently.</p>
<h3>Practical Application: Image Classifier</h3>
<p>Using educational platforms like Google Teachable Machine, students can train a vision model to classify waste types (plastic, paper, organic) in real time to simulate automated recycling sorting.</p>
<h3>AI Ethics & Bias</h3>
<p>Understanding <strong>algorithmic bias</strong> is paramount: if training datasets are skewed or non-representative, the predictions outputted by the model will replicate those structural flaws.</p>
`
}
];