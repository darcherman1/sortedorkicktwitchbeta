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
        announceMessage: 'Announcement Message ({winner}, {platform})',
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
        // NOVAS CHAVES DE TOOLTIP
        allowDualEntryTooltip: 'If checked, a user can enter once on Kick AND once on Twitch, doubling their chances.<br><br>If unchecked, the first entry (from either platform) is the only one that counts.',
        botTokenTooltip: 'This is the "password" for your bot account.<br><br><strong>How to get it:</strong><br>1. Create a new Twitch account for your bot (e.g., "MyBot").<br>2. Enable 2-Factor-Auth (2FA) on it.<br>3. Go to <code>twitchtokengenerator.com</code> and get the "Access Token".<br>4. Paste the token here and add <code>oauth:</code> in front (e.g., <code>oauth:abcdef123...</code>).',
        announceMessageTooltip: 'The message your bot will send to the Twitch chat when a winner is drawn.<br><br><code>{winner}</code> is replaced by the winner\'s name.<br><code>{platform}</code> is replaced by "Kick" or "Twitch".'
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
        announceMessage: 'Mensagem de Anúncio ({winner}, {platform})',
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
        // NOVAS CHAVES DE TOOLTIP
        allowDualEntryTooltip: 'Se marcado, um usuário pode entrar uma vez na Kick E uma vez na Twitch, dobrando suas chances.<br><br>Se desmarcado, a primeira entrada (de qualquer plataforma) é a única que conta.',
        botTokenTooltip: 'Esta é a "senha" da sua conta de bot.<br><br><strong>Como obter:</strong><br>1. Crie uma nova conta no Twitch para seu bot (ex: "MeuBot").<br>2. Ative a Autenticação de 2 Fatores (2FA) nela.<br>3. Vá ao site <code>twitchtokengenerator.com</code> e pegue o "Access Token".<br>4. Cole o token aqui e adicione <code>oauth:</code> na frente (ex: <code>oauth:abcdef123...</code>).',
        announceMessageTooltip: 'A mensagem que seu bot enviará ao chat da Twitch quando um vencedor for sorteado.<br><br><code>{winner}</code> é substituído pelo nome do vencedor.<br><code>{platform}</code> é substituído por "Kick" ou "Twitch".'
    },
    'es': {
        appTitle: 'Herramienta de Sorteo',
        loginSubtitle: 'Introduce el (los) canal(es) para el sorteo. Puedes conectar uno o ambos.',
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
        timerDuration: 'Duración del Temporizador (segundos):',
        animation: 'Animación del Sorteo:',
        animScramble: 'Aleatorio (letras)',
        animNone: 'Ninguna',
        multipliers: 'Multiplicadores de Suerte',
        platform: 'Plataforma',
        botSettings: 'Configuración del Bot',
        botUsername: 'Nombre de usuario del Bot (Twitch)',
        botUsernamePlaceholder: 'Nombre de tu bot',
        botToken: 'Token OAuth del Bot (Twitch)',
        announceMessage: 'Mensaje de Anuncio ({winner}, {platform})',
        defaultAnnounceMessage: '¡Felicidades @{winner}, ganaste el sorteo desde {platform}! 🎉',
        saveSettings: 'Guardar Configuración',
        statusWaiting: 'Presiona "Iniciar Sorteo" para conectarte a lo(s) chat(s).',
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
        credits: 'Versión actualizada del proyecto kickaway (github) por darcherman v2.0',
        // NOVAS CHAVES DE TOOLTIP
        allowDualEntryTooltip: 'Si está marcado, un usuario puede entrar una vez en Kick Y una vez en Twitch, duplicando sus oportunidades.<br><br>Si está desmarcado, la primera entrada (de cualquier plataforma) es la única que cuenta.',
        botTokenTooltip: 'Esta es la "contraseña" de tu cuenta de bot.<br><br><strong>Cómo obtenerla:</strong><br>1. Crea una nueva cuenta de Twitch para tu bot (ej: "MiBot").<br>2. Activa la Autenticación de 2 Factores (2FA) en ella.<br>3. Ve a <code>twitchtokengenerator.com</code> y obtén el "Access Token".<br>4. Pega el token aquí y añade <code>oauth:</code> delante (ej: <code>oauth:abcdef123...</code>).',
        announceMessageTooltip: 'El mensaje que tu bot enviará al chat de Twitch cuando se sortee un ganador.<br><br><code>{winner}</code> se reemplaza por el nombre del ganador.<br><code>{platform}</code> se reemplaza por "Kick" o "Twitch".'
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
    const languageSelect = document.getElementById('language-select');
    
    const keywordInput = document.getElementById('keyword-input');
    const allowMultiPlatformCheckbox = document.getElementById('allow-multi-platform-checkbox');
    const excludeModsCheckbox = document.getElementById('exclude-mods-checkbox');
    const winnerTimerDurationInput = document.getElementById('winner-timer-duration-input');
    const animationSelect = document.getElementById('animation-select');
    
    const kickSubMultiplier = document.getElementById('kick-sub-multiplier');
    const kickVipMultiplier = document.getElementById('kick-vip-multiplier');
    const twitchSubMultiplier = document.getElementById('twitch-sub-multiplier');
    const twitchVipMultiplier = document.getElementById('twitch-vip-multiplier');
    
    const twitchBotUsernameInput = document.getElementById('twitch-bot-username-input');
    const twitchBotOauthInput = document.getElementById('twitch-bot-oauth-input');
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
    
    const multiWinnerModalContainer = document.getElementById('multi-winner-modal-container');
    const modalTemplate = document.getElementById('modal-template');
    
    // NOVO: Seletor do Tooltip
    const tooltipPopup = document.getElementById('tooltip-popup-container');

    // --- VARIÁVEIS DE ESTADO ---
    let kickChannel = null, twitchChannel = null;
    let kickChatroomId = null;
    let kickWs = null, twitchClient = null;
    let isGiveawayRunning = false;
    let winnerCountdownInterval = null;
    let participants = new Map();
    let allEntries = []; 
    let winners = [];
    let currentLang = 'en';

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

        if (kickChannel) connectToKick();
        if (twitchChannel) connectToTwitch();
    }
    
    // --- LÓGICA DO KICK ---
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

    function handleKickMessage(msgData) {
        if (!isGiveawayRunning) return;
        const user = msgData.sender;
        if (!user) return;
        const keyword = keywordInput.value.trim().toLowerCase();
        const messageContent = msgData.content.trim().toLowerCase();
        if (keyword !== '' && messageContent !== keyword) return;
        const badges = user.identity?.badges || [];
        if (excludeModsCheckbox.checked) {
            const isMod = badges.some(b => b.type === 'moderator' || b.type === 'broadcaster');
            if (isMod) return;
        }
        const uniqueId = `kick-${user.username}`;
        if (participants.has(uniqueId)) return;
        const userStatus = {
            isSub: badges.some(b => b.type === 'subscriber' || b.type === 'founder'),
            isVip: badges.some(b => 
                (b.type && (b.type.toLowerCase() === 'vip' || b.type.toLowerCase() === 'og')) ||
                (b.text && (b.text.toLowerCase() === 'vip' || b.text.toLowerCase() === 'og'))
            )
        };
        addParticipant(user.username, 'kick', userStatus);
    }
    
    // --- LÓGICA DO TWITCH ---
    function connectToTwitch() {
        if (twitchClient && twitchClient.readyState() === 'OPEN') twitchClient.disconnect();
        const botUsername = twitchBotUsernameInput.value.trim();
        const botOauth = twitchBotOauthInput.value.trim();
        const clientOptions = {
            connection: { secure: true, reconnect: true },
            identity: (botUsername && botOauth) ? { username: botUsername, password: botOauth } : null,
            channels: [twitchChannel]
        };
        twitchClient = new tmi.Client(clientOptions);
        twitchClient.connect().catch(console.error);
        twitchClient.on('connected', () => {
            console.log('Successfully connected to Twitch chat.');
            statusMessage.textContent = translations[currentLang].statusConnected;
            statusMessage.className = 'status-connected';
        });
        twitchClient.on('message', (channel, userstate, message, self) => {
            if (self) return;
            handleTwitchMessage(userstate, message);
        });
    }

    function handleTwitchMessage(userstate, message) {
        if (!isGiveawayRunning) return;
        const username = userstate['display-name'];
        const keyword = keywordInput.value.trim().toLowerCase();
        const messageContent = message.trim().toLowerCase();
        if (keyword !== '' && messageContent !== keyword) return;
        if (excludeModsCheckbox.checked) {
            const isMod = userstate.mod || userstate.badges?.broadcaster;
            if (isMod) return;
        }
        const uniqueId = `twitch-${username}`;
        if (participants.has(uniqueId)) return;
        if (!allowMultiPlatformCheckbox.checked && Array.from(participants.values()).some(p => p.username === username)) {
            return;
        }
        const userStatus = {
            isSub: userstate.subscriber || userstate.badges?.founder === '0',
            isVip: !!userstate.vip
        };
        addParticipant(username, 'twitch', userStatus);
    }

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
        participants.set(uniqueId, { username, platform, entries, tags });
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
            const message = messageTemplate
                .replace('{winner}', winnerName)
                .replace('{platform}', platformName);
            twitchClient.say(twitchChannel, message);
        }
    }

    // --- FUNÇÕES DE UI E ESTADO ---
    function updateParticipantListUI() {
        participantList.innerHTML = '';
        participants.forEach((p) => {
            const li = document.createElement('li');
            const icon = document.createElement('img');
            icon.className = 'platform-icon';
            icon.src = p.platform === 'kick' ? 'https://kick.com/favicon.ico' : 'https://www.twitch.tv/favicon.ico';
            icon.alt = `${p.platform} icon`;
            li.appendChild(icon);
            const nameSpan = document.createElement('span');
            nameSpan.textContent = p.username;
            li.appendChild(nameSpan);
            const tagsContainer = document.createElement('div');
            tagsContainer.className = 'status-tags-container';
            p.tags.forEach(tagInfo => {
                const tagSpan = document.createElement('span');
                tagSpan.className = `status-tag ${tagInfo.class}`;
                tagSpan.textContent = tagInfo.text;
                tagsContainer.appendChild(tagSpan);
            });
            li.appendChild(tagsContainer);
            participantList.prepend(li);
        });
        participantCount.textContent = new Set(Array.from(participants.values()).map(p => p.username)).size;
        drawButton.disabled = allEntries.length === 0;
    }

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
    }
    
    function fullReset() {
        resetGiveawayState();
        winners = [];
        updateWinnersListUI();
        if (kickWs) kickWs.close();
        if (twitchClient) twitchClient.disconnect();
        if (winnerCountdownInterval) {
            clearInterval(winnerCountdownInterval);
            winnerCountdownInterval = null;
        }
        isGiveawayRunning = false;
        setInputsDisabled(false);
        statusMessage.textContent = translations[currentLang].statusWaiting;
        statusMessage.className = 'status-waiting';
        connectedKickChannel.classList.remove('platform-kick');
        connectedTwitchChannel.classList.remove('platform-twitch');
    }
    
    function setInputsDisabled(disabled) {
        const inputs = [
            keywordInput, allowMultiPlatformCheckbox, animationSelect,
            kickSubMultiplier, kickVipMultiplier, twitchSubMultiplier, twitchVipMultiplier,
            twitchBotUsernameInput, twitchBotOauthInput, announcementMessageInput,
            startGiveawayButton, connectButton, kickChannelInput, twitchChannelInput,
            excludeModsCheckbox, winnerTimerDurationInput,
            languageSelect
        ];
        inputs.forEach(input => input.disabled = disabled);
    }
    
    function formatTime(seconds) {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }

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

            confirmButton.textContent = translations[currentLang].ok;
            drawAgainButton.textContent = translations[currentLang].drawAgain;

            winners.push({ name: winnerName, date: new Date().toLocaleString() });
            allEntries = allEntries.filter(entry => entry !== winnerUniqueId);
            participants.delete(winnerUniqueId);
            updateParticipantListUI();
            updateWinnersListUI();
            saveSettings();
            drawButton.disabled = allEntries.length === 0;
            drawAgainButton.disabled = allEntries.length === 0;

            function closeModalAndClearTimer() {
                if (winnerCountdownInterval) {
                    clearInterval(winnerCountdownInterval);
                    winnerCountdownInterval = null;
                }
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
            multiWinnerModalContainer.style.display = 'flex';
            buttonContainer.style.visibility = 'visible';

            const animationType = animationSelect.value;

            function onAnimationComplete() {
                winnerNameEl.textContent = winnerName;
                winnerNameEl.classList.add('winner');
                platformIconEl.src = platform === 'kick' ? 'https://kick.com/favicon.ico' : 'https://www.twitch.tv/favicon.ico';
                platformIconEl.style.display = 'inline-block';
                
                let duration = parseInt(winnerTimerDurationInput.value, 10) || 0;
                if (duration > 0) {
                    timerDisplay.textContent = formatTime(duration);
                    winnerCountdownInterval = setInterval(() => {
                        duration--;
                        timerDisplay.textContent = formatTime(duration);
                        if (duration <= 0) {
                            clearInterval(winnerCountdownInterval);
                            winnerCountdownInterval = null;
                            timerDisplay.style.color = 'var(--error-color)';
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
            announcementMessage: announcementMessageInput.value,
            winners: winners,
            excludeMods: excludeModsCheckbox.checked,
            timerDuration: winnerTimerDurationInput.value
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
            announcementMessageInput.value = settings.announcementMessage || translations[currentLang].defaultAnnounceMessage;
            winners = settings.winners || [];
            updateWinnersListUI();
            excludeModsCheckbox.checked = settings.excludeMods || false;
            winnerTimerDurationInput.value = settings.timerDuration || '10';
        } else {
             announcementMessageInput.value = translations[currentLang].defaultAnnounceMessage;
        }
    }

    // --- NOVAS FUNÇÕES DE TOOLTIP ---
    function showTooltip(button) {
        const key = button.dataset.tooltipKey;
        const content = translations[currentLang][key];
        
        if (!content) return;
        
        // Insere o conteúdo e formata
        tooltipPopup.innerHTML = content;
        
        // Calcula a posição
        const rect = button.getBoundingClientRect();
        const popupRect = tooltipPopup.getBoundingClientRect();
        
        let top = rect.bottom + window.scrollY + 5;
        let left = rect.left + window.scrollX - (popupRect.width / 2) + (rect.width / 2);
        
        // Ajusta para não sair da tela
        if (left < 10) left = 10;
        if (left + popupRect.width > window.innerWidth - 10) {
            left = window.innerWidth - popupRect.width - 10;
        }
        
        tooltipPopup.style.top = `${top}px`;
        tooltipPopup.style.left = `${left}px`;
        
        // Mostra o tooltip
        tooltipPopup.style.visibility = 'visible';
        tooltipPopup.style.opacity = '1';
    }

    function hideTooltip() {
        tooltipPopup.style.opacity = '0';
        tooltipPopup.style.visibility = 'hidden';
    }

    // --- INICIALIZAÇÃO E EVENTOS ---
    function init() {
        currentLang = getInitialLanguage();
        setLanguage(currentLang);
        languageSelect.value = currentLang;

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

        // Evento global para fechar menus
        document.addEventListener('click', (e) => {
            // Fecha menu dropdown
            if (!headerMenuToggle.contains(e.target) && !headerMenuDropdown.contains(e.target)) {
                headerMenuDropdown.classList.remove('active');
            }
            
            // NOVO: Fecha tooltip se clicar fora
            if (!tooltipPopup.contains(e.target) && !e.target.classList.contains('tooltip-trigger')) {
                hideTooltip();
            }
        });
        
        saveSettingsButton.addEventListener('click', () => {
            saveSettings();
            showAlert('alertSettingsSaved');
        });
        
        languageSelect.addEventListener('change', () => {
            currentLang = languageSelect.value;
            setLanguage(currentLang);
            
            const currentMessage = announcementMessageInput.value;
            const defaultEn = translations['en'].defaultAnnounceMessage;
            const defaultPt = translations['pt'].defaultAnnounceMessage;
            const defaultEs = translations['es'].defaultAnnounceMessage;

            if (currentMessage === defaultEn || currentMessage === defaultPt || currentMessage === defaultEs || currentMessage === "") {
                announcementMessageInput.value = translations[currentLang].defaultAnnounceMessage;
            }
        });
        
        // NOVO: Eventos de clique para os botões de tooltip
        document.querySelectorAll('.tooltip-trigger').forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation(); // Impede que o 'document.click' feche imediatamente
                
                // Se já estiver visível e for o mesmo botão, esconde
                if (tooltipPopup.style.visibility === 'visible' && tooltipPopup.dataset.currentKey === e.currentTarget.dataset.tooltipKey) {
                    hideTooltip();
                    tooltipPopup.dataset.currentKey = '';
                } else { // Senão, mostra o novo
                    showTooltip(e.currentTarget);
                    tooltipPopup.dataset.currentKey = e.currentTarget.dataset.tooltipKey;
                }
            });
        });
    }

    init();
});