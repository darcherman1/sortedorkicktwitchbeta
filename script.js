// DICIONÁRIO DE TRADUÇÕES ATUALIZADO
const translations = {
    'en': {
        appTitle: 'Giveaway Tool',
        loginSubtitle: 'Enter the channel(s) for the giveaway. You can connect to one or both.',
        kickChannel: 'Kick Channel',
        twitchChannel: 'Twitch Channel',
        connect: 'Connect',
        connectedTo: 'Connected to:',
        language: 'Language',
        changeChannel: 'Change Channel',
        settings: 'Settings',
        keyword: 'Keyword (optional):',
        allowDualEntry: 'Allow dual entry (Kick + Twitch)',
        excludeMods: 'Exclude Moderators',
        showWinnerChat: "Show winner's chat on modal",
        timerDuration: 'Winner Timer Duration (seconds):',
        animation: 'Giveaway Animation:',
        animScramble: 'Character Scramble',
        animNone: 'No Animation',
        multipliers: 'Luck Multipliers',
        platform: 'Platform',
        botSettings: 'Bot Settings',
        botUsername: 'Twitch Bot Username',
        botUsernamePlaceholder: "Your bot's username",
        botToken: 'Twitch Bot OAuth Token',
        startMessage: 'Start Giveaway Message ({keyword})', // NOVO
        announceMessage: 'Winner Announcement Message ({winner}, {platform})',
        defaultStartMessage: 'A new giveaway has started! Type {keyword} to enter!', // NOVO
        defaultAnnounceMessage: 'Congratulations @{winner}, you won the giveaway from {platform}! 🎉',
        saveSettings: 'Save All Settings',
        statusWaiting: 'Press "Start Giveaway" to connect to chat(s).',
        statusConnected: 'Connected! Waiting for entries.',
        statusError: 'Connection error.',
        kickError: 'Kick connection error.',
        kickLost: 'Kick connection lost.',
        startGiveaway: 'Start Giveaway',
        participants: 'Participants',
        drawWinner: 'Draw Winner',
        reset: 'Reset',
        winners: 'Winners',
        drawing: 'Drawing...',
        ok: 'OK',
        drawAgain: 'Draw Again',
        alertNoParticipants: 'There are no participants to draw from!',
        alertKickConnectFail: 'Could not find Kick channel:',
        alertKickChatroomFail: 'Could not get Kick chatroom ID.',
        alertNoChannel: 'Please enter at least one channel name.',
        alertConnectFail: 'Connection failed:',
        alertSettingsSaved: 'Settings saved!',
        credits: 'Updated version of the kickaway (github) project by darcherman v2.0',
        allowDualEntryTooltip: 'If checked, a user can enter once on Kick AND once on Twitch, doubling their chances.<br><br>If unchecked, the first entry (from either platform) is the only one that counts.',
        botTokenTooltip: 'This is the "password" for your bot account.<br><br><strong>How to get it:</strong><br>1. Create a new Twitch account for your bot (e.g., "MyBot").<br>2. Enable 2-Factor-Auth (2FA) on it.<br>3. Go to <code>twitchtokengenerator.com</code> and get the "Access Token".<br>4. Paste the token here and add <code>oauth:</code> in front (e.g., <code>oauth:abcdef123...</code>).',
        // TOOLTIP DA NOVA MENSAGEM
        startMessageTooltip: 'Message the bot will send when you click "Start Giveaway".<br><br><code>{keyword}</code> is replaced by your keyword. If no keyword, it will be replaced with "any message".',
        announceMessageTooltip: 'The message your bot will send to the Twitch chat when a winner is drawn.<br><br><code>{winner}</code> is replaced by the winner\'s name.<br><code>{platform}</code> is replaced by "Kick" or "Twitch".',
        chatWaitingForMessage: 'Waiting for a message from the winner...',
        keywordAnyMessage: 'any message' // NOVO (para {keyword} em branco)
    },
    'pt': {
        appTitle: 'Ferramenta de Sorteio',
        loginSubtitle: 'Digite o(s) canal(is) para o sorteio. Você pode conectar um ou ambos.',
        kickChannel: 'Canal da Kick',
        twitchChannel: 'Canal da Twitch',
        connect: 'Conectar',
        connectedTo: 'Conectado a:',
        language: 'Idioma',
        changeChannel: 'Trocar Canal',
        settings: 'Configurações',
        keyword: 'Palavra-chave (opcional):',
        allowDualEntry: 'Permitir entrada dupla (Kick + Twitch)',
        excludeMods: 'Excluir Moderadores',
        showWinnerChat: 'Mostrar chat do vencedor no modal',
        timerDuration: 'Duração do Timer (segundos):',
        animation: 'Animação do Sorteio:',
        animScramble: 'Aleatório (letras)',
        animNone: 'Nenhuma',
        multipliers: 'Multiplicadores de Sorte',
        platform: 'Plataforma',
        botSettings: 'Configurações do Bot',
        botUsername: 'Nome de usuário do Bot (Twitch)',
        botUsernamePlaceholder: 'Nome do seu bot',
        botToken: 'Token OAuth do Bot (Twitch)',
        startMessage: 'Mensagem de Início do Sorteio ({keyword})', // NOVO
        announceMessage: 'Mensagem de Anúncio ({winner}, {platform})',
        defaultStartMessage: 'Um novo sorteio começou! Digite {keyword} para entrar!', // NOVO
        defaultAnnounceMessage: 'Parabéns @{winner}, você ganhou o sorteio pela {platform}! 🎉',
        saveSettings: 'Salvar Configurações',
        statusWaiting: 'Pressione "Start Giveaway" para conectar ao(s) chat(s).',
        statusConnected: 'Conectado! Aguardando entradas.',
        statusError: 'Erro de conexão.',
        kickError: 'Erro na conexão com a Kick.',
        kickLost: 'Conexão com a Kick perdida.',
        startGiveaway: 'Iniciar Sorteio',
        participants: 'Participantes',
        drawWinner: 'Sortear Vencedor',
        reset: 'Resetar',
        winners: 'Vencedores',
        drawing: 'Sorteando...',
        ok: 'OK',
        drawAgain: 'Sortear Novamente',
        alertNoParticipants: 'Não há participantes para sortear!',
        alertKickConnectFail: 'Não foi possível encontrar o canal da Kick:',
        alertKickChatroomFail: 'Não foi possível obter o ID do chat da Kick.',
        alertNoChannel: 'Por favor, digite pelo menos um nome de canal.',
        alertConnectFail: 'Falha na conexão:',
        alertSettingsSaved: 'Configurações salvas!',
        credits: 'Versão atualizada do projeto kickaway (github) por darcherman v2.0',
        allowDualEntryTooltip: 'Se marcado, um usuário pode entrar uma vez na Kick E uma vez na Twitch, dobrando suas chances.<br><br>Se desmarcado, a primeira entrada (de qualquer plataforma) é a única que conta.',
        botTokenTooltip: 'Esta é a "senha" da sua conta de bot.<br><br><strong>Como obter:</strong><br>1. Crie uma nova conta no Twitch para seu bot (ex: "MeuBot").<br>2. Ative a Autenticação de 2 Fatores (2FA) nela.<br>3. Vá ao site <code>twitchtokengenerator.com</code> e pegue o "Access Token".<br>4. Cole o token aqui e adicione <code>oauth:</code> na frente (ex: <code>oauth:abcdef123...</code>).',
        // TOOLTIP DA NOVA MENSAGEM
        startMessageTooltip: 'Mensagem que o bot enviará quando você clicar em "Iniciar Sorteio".<br><br><code>{keyword}</code> é substituída pela sua palavra-chave. Se não houver palavra-chave, será substituída por "qualquer mensagem".',
        announceMessageTooltip: 'A mensagem que seu bot enviará ao chat da Twitch quando um vencedor for sorteado.<br><br><code>{winner}</code> é substituído pelo nome do vencedor.<br><code>{platform}</code> é substituído por "Kick" ou "Twitch".',
        chatWaitingForMessage: 'Aguardando uma mensagem do vencedor...',
        keywordAnyMessage: 'qualquer mensagem' // NOVO
    },
    'es': {
        appTitle: 'Herramienta de Sorteo',
        loginSubtitle: 'Introduce el (los) canal(es) para el sorteio. Puedes conectar uno o ambos.',
        kickChannel: 'Canal de Kick',
        twitchChannel: 'Canal de Twitch',
        connect: 'Conectar',
        connectedTo: 'Conectado a:',
        language: 'Idioma',
        changeChannel: 'Cambiar Canal',
        settings: 'Configuración',
        keyword: 'Palabra clave (opcional):',
        allowDualEntry: 'Permitir entrada doble (Kick + Twitch)',
        excludeMods: 'Excluir Moderadores',
        showWinnerChat: 'Mostrar chat del ganador en el modal',
        timerDuration: 'Duración del Temporizador (segundos):',
        animation: 'Animación del Sorteio:',
        animScramble: 'Aleatorio (letras)',
        animNone: 'Ninguna',
        multipliers: 'Multiplicadores de Suerte',
        platform: 'Plataforma',
        botSettings: 'Configuración del Bot',
        botUsername: 'Nombre de usuario del Bot (Twitch)',
        botUsernamePlaceholder: 'Nombre de tu bot',
        botToken: 'Token OAuth del Bot (Twitch)',
        startMessage: 'Mensaje de Inicio del Sorteo ({keyword})', // NOVO
        announceMessage: 'Mensaje de Anuncio ({winner}, {platform})',
        defaultStartMessage: '¡Un nuevo sorteo ha comenzado! Escribe {keyword} para entrar.', // NOVO
        defaultAnnounceMessage: '¡Felicidades @{winner}, ganaste el sorteio desde {platform}! 🎉',
        saveSettings: 'Guardar Configuración',
        statusWaiting: 'Presiona "Iniciar Sorteio" para conectarte a lo(s) chat(s).',
        statusConnected: '¡Conectado! Esperando entradas.',
        statusError: 'Error de conexión.',
        kickError: 'Error de conexión con Kick.',
        kickLost: 'Se perdió la conexión con Kick.',
        startGiveaway: 'Iniciar Sorteio',
        participants: 'Participantes',
        drawWinner: 'Sortear Ganador',
        reset: 'Reiniciar',
        winners: 'Ganadores',
        drawing: 'Sorteando...',
        ok: 'OK',
        drawAgain: 'Sortear de Nuevo',
        alertNoParticipants: '¡No hay participantes para sortear!',
        alertKickConnectFail: 'No se pudo encontrar el canal de Kick:',
        alertKickChatroomFail: 'No se pudo obtener el ID de la sala de chat de Kick.',
        alertNoChannel: 'Por favor, introduce al menos un nombre de canal.',
        alertConnectFail: 'Falló la conexión:',
        alertSettingsSaved: '¡Configuración guardada!',
        credits: 'Versão atualizada del proyecto kickaway (github) por darcherman v2.0',
        allowDualEntryTooltip: 'Si está marcado, un usuario puede entrar una vez en Kick Y una vez en Twitch, duplicando sus oportunidades.<br><br>Si está desmarcado, la primera entrada (de cualquier plataforma) es la única que cuenta.',
        botTokenTooltip: 'Esta es la "contraseña" de tu cuenta de bot.<br><br><strong>Cómo obtenerla:</strong><br>1. Crea una nueva cuenta de Twitch para tu bot (ej: "MiBot").<br>2. Activa la Autenticación de 2 Factores (2FA) en ella.<br>3. Ve a <code>twitchtokengenerator.com</code> y obtén el "Access Token".<br>4. Pega el token aquí y añade <code>oauth:</code> delante (ej: <code>oauth:abcdef123...</code>).',
        // TOOLTIP DA NOVA MENSAGEM
        startMessageTooltip: 'Mensaje que el bot enviará cuando hagas clic en "Iniciar Sorteio".<br><br><code>{keyword}</code> se reemplaza por tu palabra clave. Si no hay palabra clave, se reemplazará por "cualquer mensaje".',
        announceMessageTooltip: 'El mensaje que tu bot enviará al chat de Twitch cuando se sortee un ganador.<br><br><code>{winner}</code> se reemplaza por el nombre del ganador.<br><code>{platform}</code> se reemplaza por "Kick" o "Twitch".',
        chatWaitingForMessage: 'Esperando un mensaje del ganador...',
        keywordAnyMessage: 'cualquier mensaje' // NOVO
    }
};

// Função para definir o idioma
function setLanguage(lang) {
    if (!translations[lang]) lang = 'en';
    
    document.querySelectorAll('[data-lang-key]').forEach(el => {
        const key = el.dataset.langKey;
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    document.querySelectorAll('[placeholder-lang-key]').forEach(el => {
        const key = el.placeholderLangKey;
        if (translations[lang][key]) {
            el.placeholder = translations[lang][key];
        }
    });

    localStorage.setItem('giveawayToolLang', lang);

    const langSelectLogin = document.getElementById('language-select-login');
    const langSelectSettings = document.getElementById('language-select-settings');
    if (langSelectLogin.value !== lang) langSelectLogin.value = lang;
    if (langSelectSettings.value !== lang) langSelectSettings.value = lang;
}

// Função para obter o idioma inicial
function getInitialLanguage() {
    const savedLang = localStorage.getItem('giveawayToolLang');
    if (savedLang && translations[savedLang]) {
        return savedLang;
    }
    const browserLang = navigator.language.split('-')[0];
    if (translations[browserLang]) {
        return browserLang;
    }
    return 'en';
}


document.addEventListener('DOMContentLoaded', () => {
    // --- SELETORES DE ELEMENTOS ---
    const loginScreen = document.getElementById('login-screen');
    const mainScreen = document.getElementById('main-screen');
    
    const kickChannelInput = document.getElementById('kick-channel-input');
    const twitchChannelInput = document.getElementById('twitch-channel-input');
    const connectButton = document.getElementById('connect-button');
    
    const connectedKickChannel = document.getElementById('connected-kick-channel');
    const connectedTwitchChannel = document.getElementById('connected-twitch-channel');
    
    const headerMenuToggle = document.getElementById('header-menu-toggle');
    const headerMenuDropdown = document.getElementById('header-menu-dropdown');
    const changeChannelButton = document.getElementById('change-channel-button');
    const languageSelectLogin = document.getElementById('language-select-login');
    const languageSelectSettings = document.getElementById('language-select-settings');
    
    const keywordInput = document.getElementById('keyword-input');
    const allowMultiPlatformCheckbox = document.getElementById('allow-multi-platform-checkbox');
    const excludeModsCheckbox = document.getElementById('exclude-mods-checkbox');
    const showWinnerChatCheckbox = document.getElementById('show-winner-chat-checkbox');
    const winnerTimerDurationInput = document.getElementById('winner-timer-duration-input');
    const animationSelect = document.getElementById('animation-select');
    
    const kickSubMultiplier = document.getElementById('kick-sub-multiplier');
    const kickVipMultiplier = document.getElementById('kick-vip-multiplier');
    const twitchSubMultiplier = document.getElementById('twitch-sub-multiplier');
    const twitchVipMultiplier = document.getElementById('twitch-vip-multiplier');
    
    const twitchBotUsernameInput = document.getElementById('twitch-bot-username-input');
    const twitchBotOauthInput = document.getElementById('twitch-bot-oauth-input');
    const startMessageInput = document.getElementById('start-message-input'); // NOVO
    const announcementMessageInput = document.getElementById('announcement-message-input');
    const saveSettingsButton = document.getElementById('save-settings-button');
    
    const statusMessage = document.getElementById('status-message');
    const startGiveawayButton = document.getElementById('start-giveaway-button');
    
    const participantCount = document.getElementById('participant-count');
    const participantList = document.getElementById('participant-list');
    const drawButton = document.getElementById('draw-button');
    const resetButton = document.getElementById('reset-button');
    
    const winnersCount = document.getElementById('winners-count');
    const winnersList = document.getElementById('winners-list');
    const winnersPanel = document.querySelector('.winners-panel'); // Seletor para o painel de vencedores
    
    const multiWinnerModalContainer = document.getElementById('multi-winner-modal-container');
    const modalTemplate = document.getElementById('modal-template');
    
    const tooltipPopup = document.getElementById('tooltip-popup-container');

    // --- VARIÁVEIS DE ESTADO ---
    let kickChannel = null, twitchChannel = null;
    let kickChatroomId = null;
    let kickWs = null, twitchClient = null;
    let isGiveawayRunning = false;
    let participants = new Map();
    let allEntries = []; 
    let winners = [];
    let currentLang = 'en';
    
    // NOVO: Lista de nomes de usuários vencedores para bloquear reentrada
    let winningUsernames = new Set(); 

    let winnerCountdownInterval = null;
    let currentMonitoredWinnerId = null;
    let currentMonitoredChatbox = null;
    let hasWinnerResponded = false;

    // --- FUNÇÕES PRINCIPAIS ---

    function showScreen(screenName) {
        loginScreen.style.display = 'none';
        mainScreen.style.display = 'none';
        if (screenName === 'login') {
            loginScreen.style.display = 'flex';
        } else if (screenName === 'main') {
            mainScreen.style.display = 'flex';
        }
    }
    
    function showAlert(langKey, ...args) {
        let message = translations[currentLang][langKey];
        if (args.length > 0) {
            message = `${message} ${args.join(' ')}`;
        }
        alert(message);
    }

    async function handleConnect() {
        const kickChannelName = kickChannelInput.value.trim().toLowerCase();
        const twitchChannelName = twitchChannelInput.value.trim().toLowerCase();

        if (!kickChannelName && !twitchChannelName) {
            showAlert('alertNoChannel');
            return;
        }

        connectButton.disabled = true;
        connectButton.textContent = 'Connecting...';

        try {
            if (kickChannelName) {
                // Esta é a conexão API v1 que estava no seu primeiro script
                const response = await fetch(`https://kick.com/api/v1/channels/${kickChannelName}`);
                if (!response.ok) throw new Error(`${translations[currentLang].alertKickConnectFail} ${kickChannelName}`);
                const data = await response.json();
                kickChatroomId = data.chatroom?.id;
                if (!kickChatroomId) throw new Error(translations[currentLang].alertKickChatroomFail);
                kickChannel = kickChannelName;
                connectedKickChannel.textContent = kickChannel;
                connectedKickChannel.classList.add('platform-kick');
                connectedKickChannel.style.display = 'inline-block';
            } else {
                 connectedKickChannel.style.display = 'none';
            }

            if (twitchChannelName) {
                twitchChannel = twitchChannelName;
                connectedTwitchChannel.textContent = twitchChannel;
                connectedTwitchChannel.classList.add('platform-twitch');
                connectedTwitchChannel.style.display = 'inline-block';
            } else {
                 connectedTwitchChannel.style.display = 'none';
            }

            loadSettings();
            showScreen('main');

        } catch (error) {
            showAlert('alertConnectFail', error.message);
        } finally {
            connectButton.disabled = false;
            setLanguage(currentLang);
        }
    }

    // FUNÇÃO ATUALIZADA
    function handleStartGiveaway() {
        if (!kickChannel && !twitchChannel) {
            showAlert('alertNoChannel');
            return;
        }
        
        resetGiveawayState();
        isGiveawayRunning = true;
        setInputsDisabled(true);
        statusMessage.textContent = translations[currentLang].statusConnected;
        statusMessage.className = 'status-waiting';

        // --- NOVA LÓGICA DE MENSAGEM INICIAL ---
        const botUsername = twitchBotUsernameInput.value.trim();
        const botOauth = twitchBotOauthInput.value.trim();
        
        // Só envia se o bot estiver configurado e o canal da Twitch conectado
        if (twitchChannel && botUsername && botOauth) {
            // A conexão do TMI.js é assíncrona, então esperamos o evento 'connected'
            // ou verificamos se já está conectado.
            const sendMessage = () => {
                const messageTemplate = startMessageInput.value;
                if (!messageTemplate) return; // Não envia se a msg estiver em branco

                let keyword = keywordInput.value.trim();
                let keywordText = (keyword === '') ? translations[currentLang].keywordAnyMessage : keyword;
                
                let message = messageTemplate.replace('{keyword}', keywordText);

                // Envia como mensagem normal (sem /announce)
                twitchClient.say(twitchChannel, message)
                    .catch((err) => console.error('Erro ao enviar mensagem inicial:', err));
            };

            // Se o cliente já estiver conectado (ex: sorteios múltiplos sem resetar), envia agora
            if (twitchClient && twitchClient.readyState() === 'OPEN') {
                sendMessage();
            } else {
                // Se não, espera o evento 'connected' para enviar
                twitchClient = new tmi.Client({
                    connection: { secure: true, reconnect: true },
                    identity: { username: botUsername, password: botOauth },
                    channels: [twitchChannel]
                });
                
                twitchClient.once('connected', () => {
                    console.log('Conectado ao Twitch para msg inicial.');
                    sendMessage(); // Envia a mensagem assim que conectar
                    statusMessage.textContent = translations[currentLang].statusConnected;
                    statusMessage.className = 'status-connected';
                });
                
                twitchClient.on('message', (channel, userstate, message, self) => {
                    if (self) return;
                    handleTwitchMessage(userstate, message);
                });

                twitchClient.connect().catch(console.error);
            }
        }
        // --- FIM DA NOVA LÓGICA ---

        if (kickChannel) connectToKick();
        // Se a twitch já não foi conectada acima, conecta agora
        if (!twitchClient && twitchChannel) {
            connectToTwitch();
        }
    }
    
    // --- FUNÇÕES DE CHAT DO VENCEDOR ---
    function appendMessageToWinnerChat(message, chatBox) {
        if (!hasWinnerResponded) {
            chatBox.innerHTML = '';
            chatBox.classList.remove('no-messages');
            hasWinnerResponded = true;
        }
        
        const p = document.createElement('p');
        p.textContent = message;
        chatBox.appendChild(p);
        chatBox.scrollTop = chatBox.scrollHeight;
    }

    function stopWinnerTimer() {
        if (winnerCountdownInterval) {
            clearInterval(winnerCountdownInterval);
            winnerCountdownInterval = null;
            
            const timerDisplay = document.getElementById('modal-timer-display');
            if (timerDisplay) {
                timerDisplay.style.color = 'var(--success-color)';
                timerDisplay.style.borderColor = 'var(--success-color)';
            }
        }
    }
    
    // --- LÓGICA DO KICK ---
    // Esta é a função de conexão ESTÁTICA do seu primeiro script
    function connectToKick() {
        const KICK_WS_URL = 'wss://ws-us2.pusher.com/app/32cbd69e4b950bf97679?protocol=7&client=js&version=8.4.0&flash=false';
        if (kickWs && kickWs.readyState === WebSocket.OPEN) kickWs.close();
        kickWs = new WebSocket(KICK_WS_URL);
        kickWs.onopen = () => {
             kickWs.send(JSON.stringify({ event: 'pusher:subscribe', data: { auth: '', channel: `chatrooms.${kickChatroomId}.v2` } }));
        };
        kickWs.onmessage = (event) => {
            const parsed = JSON.parse(event.data);
            if (parsed.event === 'pusher_internal:subscription_succeeded') {
                console.log('Successfully subscribed to Kick chat.');
                statusMessage.textContent = translations[currentLang].statusConnected;
                statusMessage.className = 'status-connected';
            }
            if (parsed.event === 'App\\Events\\ChatMessageEvent') {
                handleKickMessage(JSON.parse(parsed.data));
            }
        };
        kickWs.onerror = (error) => {
            console.error('Kick WebSocket Error:', error);
            statusMessage.textContent = translations[currentLang].kickError;
            statusMessage.className = 'status-error';
        };
        kickWs.onclose = () => {
            console.log('Kick WebSocket disconnected.');
            if (isGiveawayRunning) {
                statusMessage.textContent = translations[currentLang].kickLost;
                statusMessage.className = 'status-error';
            }
        };
    }

    // ***** INÍCIO DA CORREÇÃO (Participantes não atualizavam) *****
    function handleKickMessage(msgData) {
        const user = msgData.sender;
        if (!user) return;
        
        const uniqueId = `kick-${user.username}`;
        const messageContent = msgData.content.trim();

        if (currentMonitoredWinnerId === uniqueId && currentMonitoredChatbox) {
            appendMessageToWinnerChat(messageContent, currentMonitoredChatbox);
            stopWinnerTimer();
        }
        
        // CORREÇÃO: Esta verificação foi movida para cima
        if (!isGiveawayRunning) return;

        const usernameLower = user.username.toLowerCase();
        if (winningUsernames.has(usernameLower)) {
            return;
        }
        
        const keyword = keywordInput.value.trim().toLowerCase();
        
        if (keyword !== '' && messageContent.toLowerCase() !== keyword) return;

        const badges = user.identity?.badges || [];
        if (excludeModsCheckbox.checked) {
            const isMod = badges.some(b => b.type === 'moderator' || b.type === 'broadcaster');
            if (isMod) return;
        }

        if (participants.has(uniqueId)) return;

        // Ajuste na verificação de entrada dupla
        if (!allowMultiPlatformCheckbox.checked && Array.from(participants.values()).some(p => p.username.toLowerCase() === usernameLower && !p.hasWon)) {
            return;
        }

        const userStatus = {
            isSub: badges.some(b => b.type === 'subscriber' || b.type === 'founder'),
            isVip: badges.some(b => 
                (b.type && (b.type.toLowerCase() === 'vip' || b.type.toLowerCase() === 'og')) ||
                (b.text && (b.text.toLowerCase() === 'vip' || b.text.toLowerCase() === 'og'))
            )
        };
        addParticipant(user.username, 'kick', userStatus);
    }
    // ***** FIM DA CORREÇÃO *****
    
    
    // --- LÓGICA DO TWITCH ---
    function connectToTwitch() {
        if (twitchClient && twitchClient.readyState() === 'OPEN') {
            console.log('TMI.js já está conectado.');
            return;
        }
        
        const botUsername = twitchBotUsernameInput.value.trim();
        const botOauth = twitchBotOauthInput.value.trim();
        const clientOptions = {
            connection: { secure: true, reconnect: true },
            identity: (botUsername && botOauth) ? { username: botUsername, password: botOauth } : null,
            channels: [twitchChannel]
        };
        twitchClient = new tmi.Client(clientOptions);
        
        twitchClient.on('connected', () => {
            console.log('Successfully connected to Twitch chat.');
            statusMessage.textContent = translations[currentLang].statusConnected;
            statusMessage.className = 'status-connected';
        });
        
        twitchClient.on('message', (channel, userstate, message, self) => {
            if (self) return;
            handleTwitchMessage(userstate, message);
        });
        
        twitchClient.connect().catch(console.error);
    }

    // ***** INÍCIO DA CORREÇÃO (Participantes não atualizavam) *****
    function handleTwitchMessage(userstate, message) {
        const username = userstate['display-name'];
        const uniqueId = `twitch-${username}`;
        const messageContent = message.trim();

        if (currentMonitoredWinnerId === uniqueId && currentMonitoredChatbox) {
            appendMessageToWinnerChat(messageContent, currentMonitoredChatbox);
            stopWinnerTimer();
        }

        // CORREÇÃO: Esta verificação foi movida para cima
        if (!isGiveawayRunning) return;
        
        const usernameLower = username.toLowerCase();
         if (winningUsernames.has(usernameLower)) {
            return;
        }
        
        const keyword = keywordInput.value.trim().toLowerCase();
        
        if (keyword !== '' && messageContent.toLowerCase() !== keyword) return;
        
        if (excludeModsCheckbox.checked) {
            const isMod = userstate.mod || userstate.badges?.broadcaster;
            if (isMod) return;
        }

        if (participants.has(uniqueId)) return;
        
        // Ajuste na verificação de entrada dupla
        if (!allowMultiPlatformCheckbox.checked && Array.from(participants.values()).some(p => p.username.toLowerCase() === usernameLower && !p.hasWon)) {
            return;
        }
        
        const userStatus = {
            isSub: userstate.subscriber || userstate.badges?.founder === '0',
            isVip: !!userstate.vip
        };
        addParticipant(username, 'twitch', userStatus);
    }
    // ***** FIM DA CORREÇÃO *****

    // --- LÓGICA DO SORTEIO ---
    function addParticipant(username, platform, status) {
        const uniqueId = `${platform}-${username}`;
        if (participants.has(uniqueId)) return;
        
        let entries = 1;
        let tags = [];
        if (platform === 'kick') {
            if (status.isSub) {
                entries *= parseInt(kickSubMultiplier.value, 10) || 1;
                tags.push({ text: 'SUB', class: 'sub' });
            }
            if (status.isVip) {
                entries *= parseInt(kickVipMultiplier.value, 10) || 1;
                tags.push({ text: 'VIP', class: 'vip' });
            }
        } else if (platform === 'twitch') {
            if (status.isSub) {
                entries *= parseInt(twitchSubMultiplier.value, 10) || 1;
                 tags.push({ text: 'SUB', class: 'sub' });
            }
            if (status.isVip) {
                entries *= parseInt(twitchVipMultiplier.value, 10) || 1;
                 tags.push({ text: 'VIP', class: 'vip' });
            }
        }
        
        // NOVO: Adiciona a flag 'hasWon'
        participants.set(uniqueId, { username, platform, entries, tags, hasWon: false });
        
        for (let i = 0; i < entries; i++) {
            allEntries.push(uniqueId);
        }
        updateParticipantListUI();
    }

    function drawWinner() {
        if (allEntries.length === 0) {
            showAlert('alertNoParticipants');
            return;
        }
        drawButton.disabled = true;
        
        const winnerUniqueId = allEntries[Math.floor(Math.random() * allEntries.length)];
        const winnerObject = participants.get(winnerUniqueId);
        
        if (!winnerObject) {
            console.warn(`Could not find participant for ID ${winnerUniqueId}. Redrawing.`);
            // Limpa entradas órfãs e tenta de novo
            allEntries = allEntries.filter(entry => entry !== winnerUniqueId); 
            drawButton.disabled = allEntries.length === 0;
            if (allEntries.length > 0) {
                drawWinner();
            }
            return;
        }
        
        const winnerName = winnerObject.username;
        const winnerPlatform = winnerObject.platform;
        
        announceWinnerOnTwitch(winnerName, winnerPlatform);
        displayWinnerAnimation(winnerName, winnerUniqueId, winnerPlatform).then(() => {});
    }
    
    function announceWinnerOnTwitch(winnerName, platform) {
        const botUsername = twitchBotUsernameInput.value.trim();
        const botOauth = twitchBotOauthInput.value.trim();
        if (twitchClient && twitchClient.readyState() === 'OPEN' && botUsername && botOauth) {
            
            const messageTemplate = announcementMessageInput.value;
            const platformName = platform.charAt(0).toUpperCase() + platform.slice(1);
            
            let message = messageTemplate
                .replace('{winner}', winnerName)
                .replace('{platform}', platformName);
            
            if (message.startsWith('/announce ')) {
                const announceMessage = message.substring(10);
                twitchClient.announce(twitchChannel, announceMessage)
                    .catch((err) => {
                        console.error('Erro ao enviar comunicado:', err);
                        twitchClient.say(twitchChannel, announceMessage);
                    });
            } else {
                twitchClient.say(twitchChannel, message)
                    .catch((err) => console.error('Erro ao enviar mensagem de vencedor:', err));
            }
        }
    }

    // --- FUNÇÕES DE UI E ESTADO ---
    
    // ***** INÍCIO DA CORREÇÃO (Live Modal Update) *****
    // Esta função agora atualiza AMBAS as listas (principal e do modal)
    function updateParticipantListUI() {
        participantList.innerHTML = '';
        
        // Tenta encontrar a lista do modal. Se não existir (modal fechado), será null.
        const modalParticipantList = document.getElementById('modal-participant-list');
        if (modalParticipantList) {
            modalParticipantList.innerHTML = ''; // Limpa a lista do modal também
        }

        participants.forEach((p) => {
            // --- Cria o LI para a lista PRINCIPAL ---
            const li = document.createElement('li');
            
            const icon = document.createElement('img');
            icon.className = 'platform-icon';
            icon.src = p.platform === 'kick' ? 'https://kick.com/favicon.ico' : 'https://www.twitch.tv/favicon.ico';
            icon.alt = `${p.platform} icon`;
            li.appendChild(icon);
            
            const nameSpan = document.createElement('span');
            nameSpan.textContent = p.username;
            li.appendChild(nameSpan);
            
            // Aplica o estilo de "taxado" na lista principal
            if (p.hasWon) {
                li.style.textDecoration = 'line-through';
                li.style.opacity = '0.5';
            }
            
            const tagsContainer = document.createElement('div');
            tagsContainer.className = 'status-tags-container';
            p.tags.forEach(tagInfo => {
                const tagSpan = document.createElement('span');
                tagSpan.className = `status-tag ${tagInfo.class}`;
                tagSpan.textContent = tagInfo.text;
                tagsContainer.appendChild(tagSpan);
            });
            li.appendChild(tagsContainer);
            
            participantList.prepend(li); // Adiciona na lista principal

            // --- Cria o LI para a lista do MODAL (se o modal estiver aberto) ---
            if (modalParticipantList) {
                const modalLi = li.cloneNode(true); // Clona o item
                
                // A classe 'winner' é usada no modal, não o style inline
                if (p.hasWon) {
                    modalLi.style.textDecoration = ''; // Remove o style inline
                    modalLi.style.opacity = '';      // Remove o style inline
                    modalLi.classList.add('winner'); // Adiciona a classe CSS '.winner'
                }
                modalParticipantList.prepend(modalLi); // Adiciona na lista do modal
            }
        });
        
        // --- O resto da função continua normal ---
        
        // Conta participantes únicos que não venceram
        const activeParticipants = new Set(
            Array.from(participants.values())
                 .filter(p => !p.hasWon)
                 .map(p => p.username)
        );
        participantCount.textContent = activeParticipants.size;
        
        const isDisabled = allEntries.length === 0;
        
        // 1. Atualiza o botão principal
        drawButton.disabled = isDisabled;
        
        // 2. Atualiza o botão "Sortear Novamente" do modal (se ele estiver aberto)
        const modalDrawAgainButton = multiWinnerModalContainer.querySelector('.modal-draw-again-button');
        if (modalDrawAgainButton) {
            modalDrawAgainButton.disabled = isDisabled;
        }
    }
    // ***** FIM DA CORREÇÃO (Live Modal Update) *****


    function updateWinnersListUI() {
        winnersList.innerHTML = '';
        winners.forEach(winner => {
            const li = document.createElement('li');
            const nameSpan = document.createElement('span');
            nameSpan.className = 'winner-name-span';
            nameSpan.textContent = winner.name;
            const dateSpan = document.createElement('span');
            dateSpan.className = 'winner-date-span';
            dateSpan.textContent = winner.date;
            li.appendChild(nameSpan);
            li.appendChild(dateSpan);
            winnersList.prepend(li);
        });
        winnersCount.textContent = winners.length;
    }

    function resetGiveawayState() {
        participants.clear();
        allEntries = [];
        updateParticipantListUI();
        // Nota: winningUsernames NÃO é limpo aqui, apenas no fullReset
    }
    
    // ***** INÍCIO DA CORREÇÃO (Bug de Duplicação de Mensagem) *****
    function fullReset() {
        resetGiveawayState();
        winners = [];
        winningUsernames.clear(); 
        updateWinnersListUI();
        
        if (kickWs) kickWs.close();
        
        if (twitchClient) {
             // CORREÇÃO: Remove explicitamente os "ouvintes"
             // antes de desconectar e apagar o cliente.
             // Isso previne que ouvintes "zumbis" fiquem na memória.
             twitchClient.removeAllListeners(); 
             twitchClient.disconnect();
             twitchClient = null; 
        }
        
        if (winnerCountdownInterval) clearInterval(winnerCountdownInterval);
        winnerCountdownInterval = null;
        currentMonitoredWinnerId = null;
        currentMonitoredChatbox = null;
        hasWinnerResponded = false;
        
        isGiveawayRunning = false;
        setInputsDisabled(false);
        statusMessage.textContent = translations[currentLang].statusWaiting;
        statusMessage.className = 'status-waiting';
        connectedKickChannel.classList.remove('platform-kick');
        connectedTwitchChannel.classList.remove('platform-twitch');
    }
    // ***** FIM DA CORREÇÃO *****
    
    function setInputsDisabled(disabled) {
        const inputs = [
            keywordInput, allowMultiPlatformCheckbox, animationSelect,
            kickSubMultiplier, kickVipMultiplier, twitchSubMultiplier, twitchVipMultiplier,
            twitchBotUsernameInput, twitchBotOauthInput, announcementMessageInput,
            startGiveawayButton, connectButton, kickChannelInput, twitchChannelInput,
            excludeModsCheckbox, winnerTimerDurationInput,
            languageSelectLogin, languageSelectSettings,
            showWinnerChatCheckbox,
            startMessageInput // NOVO
        ];
        inputs.forEach(input => input.disabled = disabled);
    }
    
    function formatTime(seconds) {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }

    function adjustWinnerFontSize(nameElement, containerElement) {
        nameElement.style.fontSize = '2.5rem';
        const containerWidth = containerElement.clientWidth - 10;
        let nameWidth = nameElement.scrollWidth;
        let currentFontSize = 2.5;

        while (nameWidth > containerElement.clientWidth && currentFontSize > 1.0) {
            currentFontSize -= 0.1;
            nameElement.style.fontSize = `${currentFontSize}rem`;
            nameWidth = nameElement.scrollWidth;
        }
    }

    // ***** FUNÇÃO displayWinnerAnimation ATUALIZADA *****
    // O bloco de código que clonava a lista foi REMOVIDO,
    // pois a função updateParticipantListUI agora cuida disso.
    function displayWinnerAnimation(winnerName, winnerUniqueId, platform) {
        return new Promise(resolve => {
            if (winnerCountdownInterval) {
                clearInterval(winnerCountdownInterval);
            }
            
            const modalInstance = modalTemplate.querySelector('.modal-instance').cloneNode(true);
            
            modalInstance.querySelector('.winner-title-text').textContent = translations[currentLang].drawing;

            const winnerNameEl = document.createElement('h1');
            winnerNameEl.className = 'winner-name';
            const platformIconEl = document.createElement('img');
            platformIconEl.className = 'modal-platform-icon';
            platformIconEl.alt = `${platform} icon`;
            const animationBox = modalInstance.querySelector('.winner-animation-box');
            animationBox.innerHTML = '';
            animationBox.appendChild(platformIconEl);
            animationBox.appendChild(winnerNameEl);

            const timerDisplay = modalInstance.querySelector('#modal-timer-display');
            const buttonContainer = modalInstance.querySelector('.modal-button-container');
            const confirmButton = modalInstance.querySelector('.modal-confirm-button');
            const drawAgainButton = modalInstance.querySelector('.modal-draw-again-button');
            const chatBox = modalInstance.querySelector('#modal-winner-chat');

            // Este é o 'ul' do modal
            const modalParticipantList = modalInstance.querySelector('#modal-participant-list');
            
            confirmButton.textContent = translations[currentLang].ok;
            drawAgainButton.textContent = translations[currentLang].drawAgain;

            // ***** CORREÇÃO *****
            // O bloco de código que populava a lista (o snapshot) foi REMOVIDO DAQUI.
            // A função updateParticipantListUI() fará isso.

            // --- LÓGICA DE VENCEDOR (DO SCRIPT 1 - O BOM) ---
            winners.push({ name: winnerName, date: new Date().toLocaleString() });
            
            const winnerObject = participants.get(winnerUniqueId);
            const winnerUsernameLower = winnerObject.username.toLowerCase();
            
            if (winnerObject) {
              winnerObject.hasWon = true; // Marca como vencedor (para taxar)
              winningUsernames.add(winnerUsernameLower); // Adiciona ao bloqueio de reentrada (novas mensagens)
            }
            
            // Remove apenas as entradas (chances) do vencedor específico
            allEntries = allEntries.filter(uniqueId => uniqueId !== winnerUniqueId);
            
            // Salva as configurações ANTES de atualizar a UI
            saveSettings();
            
            // ***** CORREÇÃO *****
            // Esta chamada AGORA irá popular a lista do modal E a lista principal
            updateParticipantListUI(); 
            
            updateWinnersListUI(); // Atualiza a lista de vencedores (painel da direita)
            
            // Define o estado inicial do botão do modal
            drawAgainButton.disabled = allEntries.length === 0;
            // --- FIM DA LÓGICA DE VENCEDOR ---


            function closeModalAndClearTimer() {
                if (winnerCountdownInterval) clearInterval(winnerCountdownInterval);
                winnerCountdownInterval = null;
                currentMonitoredWinnerId = null;
                currentMonitoredChatbox = null;
                hasWinnerResponded = false;
                
                multiWinnerModalContainer.style.display = 'none';
                multiWinnerModalContainer.innerHTML = '';
            }
            
            confirmButton.onclick = () => {
                closeModalAndClearTimer();
                resolve();
            };
            drawAgainButton.onclick = () => {
                closeModalAndClearTimer();
                drawWinner(); 
            };
            
            multiWinnerModalContainer.innerHTML = '';
            multiWinnerModalContainer.appendChild(modalInstance);
            multiWinnerModalContainer.style.display = 'flex'; // Mostra o container do modal (agora tela cheia)
            buttonContainer.style.visibility = 'visible'; // Botões já ficam visíveis

            currentMonitoredWinnerId = winnerUniqueId;
            currentMonitoredChatbox = chatBox;
            hasWinnerResponded = false;
            
            const showWinnerChat = showWinnerChatCheckbox.checked;
            if (showWinnerChat) {
                chatBox.style.display = 'block';
                chatBox.innerHTML = `<p>${translations[currentLang].chatWaitingForMessage}</p>`;
                chatBox.classList.add('no-messages');
            } else {
                chatBox.style.display = 'none';
            }

            const animationType = animationSelect.value;

            function onAnimationComplete() {
                winnerNameEl.textContent = winnerName;
                winnerNameEl.classList.add('winner');
                platformIconEl.src = platform === 'kick' ? 'https://kick.com/favicon.ico' : 'https://www.twitch.tv/favicon.ico';
                platformIconEl.style.display = 'inline-block';
                
                adjustWinnerFontSize(winnerNameEl, animationBox);

                // Apenas faz o SCROLL. O 'riscado' já foi aplicado por updateParticipantListUI()
                const modalListItems = modalParticipantList.querySelectorAll('li');
                modalListItems.forEach(li => {
                    if (li.classList.contains('winner')) { // Procura pelo item que já tem a classe
                         li.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                    }
                });
                
                let duration = parseInt(winnerTimerDurationInput.value, 10) || 0;
                if (duration > 0) {
                    timerDisplay.textContent = formatTime(duration);
                    timerDisplay.style.color = 'var(--primary-text-color)';
                    timerDisplay.style.borderColor = 'var(--border-color)';

                    winnerCountdownInterval = setInterval(() => {
                        duration--;
                        timerDisplay.textContent = formatTime(duration);
                        if (duration <= 0) {
                            clearInterval(winnerCountdownInterval);
                            winnerCountdownInterval = null;
                            timerDisplay.style.color = 'var(--error-color)';
                            timerDisplay.style.borderColor = 'var(--error-color)';
                        }
                    }, 1000);
                } else {
                    timerDisplay.style.display = 'none';
                }
            }

            if (animationType === 'none' || animationType === "") {
                onAnimationComplete();
                return;
            }

            const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!?*';
            let frame = 0;
            const scrambleInterval = setInterval(() => {
                let output = '';
                let completed = true;
                for (let i = 0; i < winnerName.length; i++) {
                    const from = winnerName[i];
                    const to = chars[Math.floor(Math.random() * chars.length)];
                    const progress = Math.min(frame / (60 + i * 2), 1);
                    if (progress < 1) completed = false;
                    output += (Math.random() < progress) ? from : to;
                }
                winnerNameEl.textContent = output;
                if (completed) {
                    clearInterval(scrambleInterval);
                    onAnimationComplete();
                }
                frame++;
            }, 30);
        });
    }
    
    // --- PERSISTÊNCIA ---
    function saveSettings() {
        const settings = {
            kickChannel: kickChannelInput.value,
            twitchChannel: twitchChannelInput.value,
            kickSubMultiplier: kickSubMultiplier.value,
            kickVipMultiplier: kickVipMultiplier.value,
            twitchSubMultiplier: twitchSubMultiplier.value,
            twitchVipMultiplier: twitchVipMultiplier.value,
            twitchBotUsername: twitchBotUsernameInput.value,
            startMessage: startMessageInput.value, // NOVO
            announcementMessage: announcementMessageInput.value,
            winners: winners,
            excludeMods: excludeModsCheckbox.checked,
            timerDuration: winnerTimerDurationInput.value,
            showWinnerChat: showWinnerChatCheckbox.checked
        };
        localStorage.setItem('giveawayToolSettings', JSON.stringify(settings));
    }
    
    function loadSettings() {
        const settings = JSON.parse(localStorage.getItem('giveawayToolSettings'));
        if (settings) {
            kickChannelInput.value = settings.kickChannel || '';
            twitchChannelInput.value = settings.twitchChannel || '';
            kickSubMultiplier.value = settings.kickSubMultiplier || '2';
            kickVipMultiplier.value = settings.kickVipMultiplier || '2';
            twitchSubMultiplier.value = settings.twitchSubMultiplier || '2';
            twitchVipMultiplier.value = settings.twitchVipMultiplier || '2';
            twitchBotUsernameInput.value = settings.twitchBotUsername || '';
            startMessageInput.value = settings.startMessage || translations[currentLang].defaultStartMessage; // NOVO
            announcementMessageInput.value = settings.announcementMessage || translations[currentLang].defaultAnnounceMessage;
            winners = settings.winners || [];
            updateWinnersListUI();
            excludeModsCheckbox.checked = settings.excludeMods || false;
            winnerTimerDurationInput.value = settings.timerDuration || '30';
            showWinnerChatCheckbox.checked = settings.showWinnerChat !== false;
        } else {
             startMessageInput.value = translations[currentLang].defaultStartMessage; // NOVO
             announcementMessageInput.value = translations[currentLang].defaultAnnounceMessage;
             winnerTimerDurationInput.value = '30';
             showWinnerChatCheckbox.checked = true;
        }
    }

    // --- LÓGICA DO TOOLTIP ---
    function showTooltip(button) {
        const key = button.dataset.tooltipKey;
        const content = translations[currentLang][key];
        
        if (!content) return;
        
        tooltipPopup.innerHTML = content;
        
        const rect = button.getBoundingClientRect();
        
        let top = rect.top + window.scrollY;
        let left = rect.right + window.scrollX + 10;
        
        tooltipPopup.style.top = `${top}px`;
        tooltipPopup.style.left = `${left}px`;
        
        tooltipPopup.style.visibility = 'visible';
        tooltipPopup.style.opacity = '1';
        
        const popupRect = tooltipPopup.getBoundingClientRect();
        if (left + popupRect.width > (window.innerWidth - 10)) {
            left = rect.left + window.scrollX - popupRect.width - 10;
            tooltipPopup.style.left = `${left}px`;
        }
        if (top + popupRect.height > (window.innerHeight - 10)) {
             top = window.innerHeight - popupRect.height - 10;
             tooltipPopup.style.top = `${top}px`;
        }
    }

    function hideTooltip() {
        tooltipPopup.style.opacity = '0';
        tooltipPopup.style.visibility = 'hidden';
    }

    // --- FUNÇÃO DE MUDANÇA DE IDIOMA ---
    function handleLanguageChange(event) {
        currentLang = event.target.value;
        
        setLanguage(currentLang);
        
        // Atualiza os placeholders das mensagens
        const currentStartMessage = startMessageInput.value;
        const defaultStartEn = translations['en'].defaultStartMessage;
        const defaultStartPt = translations['pt'].defaultStartMessage;
        const defaultStartEs = translations['es'].defaultStartMessage;

        if (currentStartMessage === defaultStartEn || currentStartMessage === defaultStartPt || currentStartMessage === defaultStartEs || currentStartMessage === "") {
            startMessageInput.value = translations[currentLang].defaultStartMessage;
        }

        const currentAnnounceMessage = announcementMessageInput.value;
        const defaultAnnounceEn = translations['en'].defaultAnnounceMessage;
        const defaultAnnouncePt = translations['pt'].defaultAnnounceMessage;
        const defaultAnnounceEs = translations['es'].defaultAnnounceMessage;

        if (currentAnnounceMessage === defaultAnnounceEn || currentAnnounceMessage === defaultAnnouncePt || currentAnnounceMessage === defaultAnnounceEs || currentAnnounceMessage === "") {
            announcementMessageInput.value = translations[currentLang].defaultAnnounceMessage;
        }
    }

    // --- INICIALIZAÇÃO E EVENTOS ---
    function init() {
        currentLang = getInitialLanguage();
        setLanguage(currentLang);
        languageSelectLogin.value = currentLang;
        languageSelectSettings.value = currentLang;

        loadSettings();
        
        connectButton.addEventListener('click', handleConnect);
        startGiveawayButton.addEventListener('click', handleStartGiveaway);
        drawButton.addEventListener('click', drawWinner);
        resetButton.addEventListener('click', fullReset);
        
        changeChannelButton.addEventListener('click', () => {
            fullReset();
            showScreen('login');
        });
        
        headerMenuToggle.addEventListener('click', () => {
            headerMenuDropdown.classList.toggle('active');
        });

        document.addEventListener('click', (e) => {
            if (!headerMenuToggle.contains(e.target) && !headerMenuDropdown.contains(e.target)) {
                headerMenuDropdown.classList.remove('active');
            }
            
            if (!tooltipPopup.contains(e.target) && !e.target.classList.contains('tooltip-trigger')) {
                hideTooltip();
            }
        });
        
        saveSettingsButton.addEventListener('click', () => {
            saveSettings();
            showAlert('alertSettingsSaved');
        });
        
        languageSelectLogin.addEventListener('change', handleLanguageChange);
        languageSelectSettings.addEventListener('change', handleLanguageChange);
        
        document.querySelectorAll('.tooltip-trigger').forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                
                if (tooltipPopup.style.visibility === 'visible' && tooltipPopup.dataset.currentKey === e.currentTarget.dataset.tooltipKey) {
                    hideTooltip();
                    tooltipPopup.dataset.currentKey = '';
                } else {
                    hideTooltip();
                    showTooltip(e.currentTarget);
                    tooltipPopup.dataset.currentKey = e.currentTarget.dataset.tooltipKey;
                }
            });
        });
    }

    init();
});