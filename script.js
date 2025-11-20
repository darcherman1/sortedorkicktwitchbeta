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
        whoCanParticipate: 'Who can participate?',
        allowViewers: 'Viewers',
        allowSubs: 'Subscribers',
        allowVips: 'VIPs',
        allowMods: 'Moderators',
        
        showWinnerChat: "Show winner's chat on modal",
        timerDuration: 'Winner Timer Duration (seconds):',
        animation: 'Giveaway Animation:',
        animScramble: 'Character Scramble',
        animNone: 'No Animation',
        multipliers: 'Luck Multipliers',
        platform: 'Platform',
        botSettings: 'Bot Settings',
        
        enableTwitchBot: 'Enable Twitch Bot',
        botUsername: 'Twitch Bot Username',
        botUsernamePlaceholder: "Your bot's username",
        botToken: 'Twitch Bot OAuth Token',
        
        useAnnouncementAuto: 'Send Auto-Messages as Announcement',
        announcementColor: 'Announcement Color:',
        modalAsAnnouncement: 'As Announcement (Twitch)',
        announcementScopeWarning: '⚠️ ATTENTION: To use the Announcement feature, your Token MUST have the "moderator:manage:announcements" scope enabled.\n\nPlease generate a new token if you haven\'t done so yet.',
        colorPrimary: 'Primary',
        colorBlue: 'Blue',
        colorGreen: 'Green',
        colorOrange: 'Orange',
        colorPurple: 'Purple',
        
        startMessage: 'Start Giveaway Message ({keyword})',
        announceMessage: 'Winner Message ({winner}, {platform}, {chance}%, {award})',
        defaultStartMessage: 'A new giveaway has started! Type {keyword} to enter!',
        defaultAnnounceMessage: 'Congratulations @{winner}, you won {award} from {platform} with a {chance}% chance! 🎉',
        
        enableKickBot: 'Enable Kick Bot (via Kicklet)',
        kickletApiToken: 'Kicklet API Token',
        kickStartMessage: 'Kick Start Message ({keyword})',
        kickAnnounceMessage: 'Winner Message (Kick) ({winner}, {platform}, {chance}%, {award})',
        defaultKickStartMessage: 'A new giveaway has started! Type {keyword} to enter!',
        defaultKickAnnounceMessage: 'Congratulations @{winner}, you won {award} from {platform} with a {chance}% chance! 🎉',
        
        kickletTokenTooltip: 'Get this from YOUR Kicklet Profile Settings <a href="https://kicklet.app/profile/settings" target="_blank">https://kicklet.app/profile/settings</a> log in to your account, go to "API tokens" and click to create a bot, choose any name you want, copy and paste the token here<br><br>This allows the tool to send messages as the Kicklet bot in your chat.',
        kickStartMessageTooltip: 'Message the Kicklet bot will send when you click "Start Giveaway".<br><br><code>{keyword}</code> is replaced by your keyword.',
        
        announceMessageTooltip: 'The message your bot sends. Variables: <br><code>{winner}</code>: winner\'s name.<br><code>{platform}</code>: "Kick" or "Twitch".<br><code>{chance}</code>: winner\'s % chance.<br><code>{award}</code>: prize selected in the modal message box.',
        kickAnnounceMessageTooltip: 'The message your bot sends. Variables: <br><code>{winner}</code>: winner\'s name.<br><code>{platform}</code>: "Kick" or "Twitch".<br><code>{chance}</code>: winner\'s % chance.<br><code>{award}</code>: prize selected in the modal message box.',

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
        
        botTokenTooltip: 'This is the "password" for your bot account.<br><br><strong>IMPORTANT:</strong> To use Announcements (/announce), the token MUST have the <code>moderator:manage:announcements</code> scope.<br><br><strong>How to get it:</strong><br>1. Visit <code>twitchtokengenerator.com</code><br>2. Select "Custom Scope Token".<br>3. Enable <code>chat:read</code>, <code>chat:edit</code> AND <code>moderator:manage:announcements</code>.<br>4. Generate and copy the Access Token.',
        
        startMessageTooltip: 'Message the bot will send when you click "Start Giveaway".<br><br><code>{keyword}</code> is replaced by your keyword. If no keyword, it will be replaced with "any message".',
        
        multipliersTooltip: "Increases a user's chance of winning.<br><br><strong>Example:</strong> If the value is '2', a SUB will have 2x the chances (2 'tickets' in the draw).<br><br><strong>IMPORTANT (KICK):</strong> For the Kick Sub and VIP multiplier to work, the user must have their <strong>Sub/VIP badge enabled</strong> in their chat settings on your Kick channel.",

        chatWaitingForMessage: 'Waiting for a message from the winner...',
        keywordAnyMessage: 'any message',

        pauseGiveaway: 'Stop Entries',
        resumeGiveaway: 'Resume Entries',
        statusPaused: 'Entries are paused.',
        closedMessages: '"Stop Entries" Messages',
        closedMessagesDesc: 'Messages sent by bots when you stop entries.',
        twitchClosedMessage: 'Twitch "Closed" Message',
        kickClosedMessage: 'Kick "Closed" Message',
        closedMessageTooltip: 'Message the bot will send when you click "Stop Entries".',
        defaultTwitchClosedMessage: 'Entries are now closed! Good luck.',
        defaultKickClosedMessage: 'Entries are now closed! Good luck.',

        enableAwardsOverlay: 'Awards Panel', 
        awardsDv: 'DV (Login)',
        awardsApiKey: 'API Key',
        awardsOverlayTooltip: 'Enter the credentials for your overlay.html file.<br><br>This tool only saves the settings; the overlay file reads them separately.',
        awardsPanelTitle: 'Current Awards',
        awardsStatusLoading: 'Loading awards...',
        awardsStatusError: 'Check credentials in settings.',
        awardsStatusApiError: 'API Error. Retrying...',
        awardsStatusNoAwards: 'No awards available.',
        awardAnnounceMessageLabel: 'Award Announcement Message ({award})',
        awardAnnounceMessageTooltip: 'The message your bots will send when you click an award.<br><br><code>{award}</code> is replaced by the award name.',
        defaultAwardAnnounceMessage: 'Next giveaway: {award}!',
        
        enableModalSendMessage: 'Enable chat send panel on winner modal',
        modalSendMessageTitle: 'Send Chat Message',
        modalMessagePlaceholder: 'Type a message to send to both chats...',
        modalSendGlobalButton: 'Send Global Message',
        modalSendAwardButton: 'Send Award',
        defaultAwardFallback: 'the prize'
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
        whoCanParticipate: 'Quem pode participar?',
        allowViewers: 'Viewers',
        allowSubs: 'Inscritos (Subs)',
        allowVips: 'VIPs',
        allowMods: 'Moderadores',
        
        showWinnerChat: 'Mostrar chat do vencedor no modal',
        timerDuration: 'Duração do Timer (segundos):',
        animation: 'Animação do Sorteio:',
        animScramble: 'Aleatório (letras)',
        animNone: 'Nenhuma',
        multipliers: 'Multiplicadores de Sorte',
        platform: 'Plataforma',
        botSettings: 'Configurações do Bot',

        enableTwitchBot: 'Ativar Bot da Twitch',
        botUsername: 'Nome de usuário do Bot (Twitch)',
        botUsernamePlaceholder: 'Nome do seu bot',
        botToken: 'Token OAuth do Bot (Twitch)',
        
        useAnnouncementAuto: 'Enviar Auto-Mensagens como Comunicado',
        announcementColor: 'Cor do Comunicado:',
        modalAsAnnouncement: 'Como Comunicado (Twitch)',
        announcementScopeWarning: '⚠️ ATENÇÃO: Para usar a função de Comunicado (Anúncio), seu Token DEVE ter o escopo "moderator:manage:announcements" ativado.\n\nPor favor, gere um novo token se ainda não fez isso.',
        colorPrimary: 'Padrão',
        colorBlue: 'Azul',
        colorGreen: 'Verde',
        colorOrange: 'Laranja',
        colorPurple: 'Roxo',

        startMessage: 'Mensagem de Início do Sorteio ({keyword})',
        announceMessage: 'Mensagem do Vencedor ({winner}, {platform}, {chance}%, {award})',
        defaultStartMessage: 'Um novo sorteio começou! Digite {keyword} para entrar!',
        defaultAnnounceMessage: 'Parabéns @{winner}, você ganhou {award} pela {platform} com {chance}% de chance! 🎉',
        
        enableKickBot: 'Ativar Bot da Kick (via Kicklet)',
        kickletApiToken: 'Token de API do Kicklet',
        kickStartMessage: 'Mensagem de Início (Kick) ({keyword})',
        kickAnnounceMessage: 'Mensagem do Vencedor (Kick) ({winner}, {platform}, {chance}%, {award})',
        defaultKickStartMessage: 'Um novo sorteio começou! Digite {keyword} para entrar!',
        defaultKickAnnounceMessage: 'Parabéns @{winner}, você ganhou {award} pela {platform} com {chance}% de chance! 🎉',
        
        kickletTokenTooltip: 'Pegue isso nas Configurações do SEU Perfil do Kicklet <a href="https://kicklet.app/profile/settings" target="_blank">https://kicklet.app/profile/settings</a> entre na sua conta vá até "API tokens" e clique pra criar um bot, escolha o nome que você quiser, copie e cole aqui o token<br><br>Isso permite que a ferramenta envie mensagens como o bot Kicklet no seu chat.',
        kickStartMessageTooltip: 'Mensagem que o bot Kicklet enviará quando você clicar em "Iniciar Sorteio".<br><br><code>{keyword}</code> é substituída pela sua palavra-chave.',
        
        announceMessageTooltip: 'A mensagem que seu bot enviará. Variáveis: <br><code>{winner}</code>: nome do vencedor.<br><code>{platform}</code>: "Kick" ou "Twitch".<br><code>{chance}</code>: % de chance do vencedor.<br><code>{award}</code>: prêmio selecionado na caixa de mensagem do modal.',
        kickAnnounceMessageTooltip: 'A mensagem que seu bot enviará. Variáveis: <br><code>{winner}</code>: nome do vencedor.<br><code>{platform}</code>: "Kick" ou "Twitch".<br><code>{chance}</code>: % de chance do vencedor.<br><code>{award}</code>: prêmio selecionado na caixa de mensagem do modal.',

        saveSettings: 'Salvar Configurações',
        statusWaiting: 'Pressione "Iniciar Sorteio" para conectar ao(s) chat(s).',
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
        
        botTokenTooltip: 'Esta é a "senha" da sua conta de bot.<br><br><strong>IMPORTANTE:</strong> Para usar Comunicados (/announce), o token DEVE ter o escopo <code>moderator:manage:announcements</code>.<br><br><strong>Como obter:</strong><br>1. Vá em <code>twitchtokengenerator.com</code><br>2. Escolha "Custom Scope Token".<br>3. Marque <code>chat:read</code>, <code>chat:edit</code> E <code>moderator:manage:announcements</code>.<br>4. Gere e copie o Access Token.',
        
        startMessageTooltip: 'Mensagem que o bot enviará quando você clicar em "Iniciar Sorteio".<br><br><code>{keyword}</code> é substituída pela sua palavra-chave. Se não houver palavra-chave, será substituída por "qualquer mensagem".',
        
        multipliersTooltip: "Aumenta a chance de um usuário ganhar.<br><br><strong>Exemplo:</strong> Se o valor for '2', um SUB terá 2x mais chances (2 'bilhetes' no sorteio).<br><br><strong>IMPORTANTE (KICK):</strong> Para o multiplicador de Sub e VIP da Kick funcionar, o usuário precisa ter o <strong>distintivo (badge) de Sub/VIP ativado</strong> nas configurações de chat do seu canal Kick.",

        chatWaitingForMessage: 'Aguardando uma mensagem do vencedor...',
        keywordAnyMessage: 'qualquer mensagem',

        pauseGiveaway: 'Parar Entradas',
        resumeGiveaway: 'Retomar Entradas',
        statusPaused: 'As entradas estão pausadas.',
        closedMessages: 'Mensagens de "Parar Entradas"',
        closedMessagesDesc: 'Mensagens que os bots enviam ao parar as entradas.',
        twitchClosedMessage: 'Mensagem "Fechada" (Twitch)',
        kickClosedMessage: 'Mensagem "Fechada" (Kick)',
        closedMessageTooltip: 'Mensagem que o bot enviará quando você clicar em "Parar Entradas".',
        defaultTwitchClosedMessage: 'As entradas estão fechadas! Boa sorte.',
        defaultKickClosedMessage: 'As entradas estão fechadas! Boa sorte.',

        enableAwardsOverlay: 'Painel de Premiação',
        awardsDv: 'DV (Login)',
        awardsApiKey: 'Chave da API',
        awardsOverlayTooltip: 'Insira as credenciais para o seu painel de prêmios.<br><br>Elas são salvas localmente ao clicar em "Salvar Configurações".',
        awardsPanelTitle: 'Prêmios Atuais',
        awardsStatusLoading: 'Carregando prêmios...',
        awardsStatusError: 'Verifique as credenciais nas Configurações.',
        awardsStatusApiError: 'Erro na API. Tentando novamente...',
        awardsStatusNoAwards: 'Nenhum prêmio disponível.',
        awardAnnounceMessageLabel: 'Mensagem de Anúncio de Prêmio ({award})',
        awardAnnounceMessageTooltip: 'A mensagem que seus bots enviarão quando você clicar em um prêmio.<br><br><code>{award}</code> é substituído pelo nome do prêmio.',
        defaultAwardAnnounceMessage: 'Próximo sorteio: {award}!',
        
        enableModalSendMessage: 'Ativar painel de envio de chat no modal',
        modalSendMessageTitle: 'Enviar Mensagem no Chat',
        modalMessagePlaceholder: 'Digite uma mensagem para enviar para ambos os chats...',
        modalSendGlobalButton: 'Enviar Mensagem Global',
        modalSendAwardButton: 'Enviar Premiação',
        defaultAwardFallback: 'o prêmio'
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
        whoCanParticipate: '¿Quién puede participar?',
        allowViewers: 'Espectadores',
        allowSubs: 'Suscriptores',
        allowVips: 'VIPs',
        allowMods: 'Moderadores',
        
        showWinnerChat: 'Mostrar chat del ganador en el modal',
        timerDuration: 'Duración del Temporizador (segundos):',
        animation: 'Animación del Sorteio:',
        animScramble: 'Aleatorio (letras)',
        animNone: 'Ninguna',
        multipliers: 'Multiplicadores de Suerte',
        platform: 'Plataforma',
        botSettings: 'Configuración del Bot',

        enableTwitchBot: 'Activar Bot de Twitch',
        botUsername: 'Nombre de usuario del Bot (Twitch)',
        botUsernamePlaceholder: 'Nombre de tu bot',
        botToken: 'Token OAuth del Bot (Twitch)',

        useAnnouncementAuto: 'Enviar Auto-Mensajes como Comunicado',
        announcementColor: 'Color del Comunicado:',
        modalAsAnnouncement: 'Como Comunicado (Twitch)',
        announcementScopeWarning: '⚠️ ATENCIÓN: Para utilizar la función de Comunicado (Anuncio), su Token DEBE tener el alcance "moderator:manage:announcements" activado.\n\nPor favor, genere un nuevo token si aún no lo ha hecho.',
        colorPrimary: 'Principal',
        colorBlue: 'Azul',
        colorGreen: 'Verde',
        colorOrange: 'Naranja',
        colorPurple: 'Morado',

        startMessage: 'Mensaje de Inicio del Sorteo ({keyword})',
        announceMessage: 'Mensaje del Ganador ({winner}, {platform}, {chance}%, {award})',
        defaultStartMessage: '¡Un nuevo sorteio ha comenzado! Escribe {keyword} para entrar.',
        defaultAnnounceMessage: '¡Felicidades @{winner}, ganaste {award} desde {platform} con un {chance}% de chance! 🎉',
        
        enableKickBot: 'Activar Bot de Kick (vía Kicklet)',
        kickletApiToken: 'Token de API de Kicklet',
        kickStartMessage: 'Mensaje de Inicio (Kick) ({keyword})',
        kickAnnounceMessage: 'Mensaje del Ganador (Kick) ({winner}, {platform}, {chance}%, {award})',
        defaultKickStartMessage: '¡Un nuevo sorteio ha comenzado! Escribe {keyword} para entrar.',
        defaultKickAnnounceMessage: '¡Felicidades @{winner}, ganaste {award} desde {platform} con un {chance}% de chance! 🎉',
        
        kickletTokenTooltip: 'Obtén esto en la Configuración de TU Perfil de Kicklet <a href="https://kicklet.app/profile/settings" target="_blank">https://kicklet.app/profile/settings</a> inicia sesión en tu cuenta, ve a "API tokens" y haz clic para crear un bot, elige el nombre que quieras, copia y pega el token aquí<br><br>Esto permite que la herramienta envie mensajes como el bot Kicklet en tu chat.',
        kickStartMessageTooltip: 'Mensaje que el bot Kicklet enviará al hacer clic en "Iniciar Sorteio".<br><br><code>{keyword}</code> se reemplaza por tu palabra clave.',
        
        announceMessageTooltip: 'El mensaje que tu bot enviará. Variables: <br><code>{winner}</code>: nombre del ganador.<br><code>{platform}</code>: "Kick" o "Twitch".<br><code>{chance}</code>: % de probabilidad del ganador.<br><code>{award}</code>: premio seleccionado en la caja de mensaje del modal.',
        kickAnnounceMessageTooltip: 'El mensaje que tu bot enviará. Variables: <br><code>{winner}</code>: nombre del ganador.<br><code>{platform}</code>: "Kick" o "Twitch".<br><code>{chance}</code>: % de probabilidad del ganador.<br><code>{award}</code>: premio seleccionado en la caja de mensaje del modal.',

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
        
        botTokenTooltip: 'Esta es la "contraseña" de tu cuenta de bot.<br><br><strong>IMPORTANTE:</strong> Para usar Comunicados (/announce), el token DEBE tener el alcance <code>moderator:manage:announcements</code>.<br><br><strong>Cómo obtenerla:</strong><br>1. Ve a <code>twitchtokengenerator.com</code><br>2. Elige "Custom Scope Token".<br>3. Marca <code>chat:read</code>, <code>chat:edit</code> Y <code>moderator:manage:announcements</code>.<br>4. Genera y copia el Access Token.',
        
        startMessageTooltip: 'Mensaje que el bot enviará cuando hagas clic en "Iniciar Sorteio".<br><br><code>{keyword}</code> se reemplaza por tu palabra clave. Si no hay palabra clave, se reemplazará por "cualquer mensaje".',
        
        multipliersTooltip: "Aumenta la probabilidad de que un usuario gane.<br><br><strong>Ejemplo:</strong> Si el valor es '2', un SUB tendrá 2x más probabilidades (2 'boletos' en el sorteo).<br><br><strong>IMPORTANTE (KICK):</strong> Para que el multiplicador de Sub y VIP de Kick funcione, el usuario debe tener su <strong>insignia (badge) de Sub/VIP activada</strong> en la configuración de chat de tu canal de Kick.",

        chatWaitingForMessage: 'Esperando un mensaje del ganador...',
        keywordAnyMessage: 'cualquer mensaje',

        pauseGiveaway: 'Parar Entradas',
        resumeGiveaway: 'Reanudar Entradas',
        statusPaused: 'Las entradas están pausadas.',
        closedMessages: 'Mensajes de "Parar Entradas"',
        closedMessagesDesc: 'Mensajes que envían los bots al parar las entradas.',
        twitchClosedMessage: 'Mensaje "Cerrado" (Twitch)',
        kickClosedMessage: 'Mensaje "Cerrado" (Kick)',
        closedMessageTooltip: 'Mensaje que el bot enviará al hacer clic en "Parar Entradas".',
        defaultTwitchClosedMessage: '¡Las entradas están cerradas! Buena suerte.',
        defaultKickClosedMessage: '¡Las entradas están cerradas! Buena suerte.',

        enableAwardsOverlay: 'Panel de Premios',
        awardsDv: 'DV (Login)',
        awardsApiKey: 'Clave de API',
        awardsOverlayTooltip: 'Introduce las credenciales para tu panel de premios.<br><br>Se guardan localmente al hacer clic en "Guardar Configuración".',
        awardsPanelTitle: 'Prêmios Actuales',
        awardsStatusLoading: 'Cargando premios...',
        awardsStatusError: 'Comprueba las credenciales en Configuración.',
        awardsStatusApiError: 'Error de API. Reintentando...',
        awardsStatusNoAwards: 'No hay premios disponibles.',
        awardAnnounceMessageLabel: 'Mensaje de Anuncio de Premio ({award})',
        awardAnnounceMessageTooltip: 'El mensaje que enviarán tus bots al hacer clic en un premio.<br><br><code>{award}</code> se reemplaza por el nombre del premio.',
        defaultAwardAnnounceMessage: 'Próximo sorteio: ¡{award}!',

        enableModalSendMessage: 'Activar panel de envío de chat en el modal',
        modalSendMessageTitle: 'Enviar Mensaje de Chat',
        modalMessagePlaceholder: 'Escribe un mensaje para enviar a ambos chats...',
        modalSendGlobalButton: 'Enviar Mensaje Global',
        modalSendAwardButton: 'Enviar Premio',
        defaultAwardFallback: 'el premio'
    },
    'vi': {
        appTitle: 'Công cụ Quay số',
        loginSubtitle: 'Nhập (các) kênh để quay số. Bạn có thể kết nối một hoặc cả hai.',
        kickChannel: 'Kênh Kick',
        twitchChannel: 'Kênh Twitch',
        connect: 'Kết nối',
        connectedTo: 'Đã kết nối tới:',
        language: 'Ngôn ngữ',
        changeChannel: 'Đổi kênh',
        settings: 'Cài đặt',
        keyword: 'Từ khóa (tùy chọn):',
        allowDualEntry: 'Cho phép tham gia kép (Kick + Twitch)',
        
        excludeMods: 'Loại trừ Người điều hành',
        whoCanParticipate: 'Ai có thể tham gia?',
        allowViewers: 'Người xem',
        allowSubs: 'Người đăng ký',
        allowVips: 'VIP',
        allowMods: 'Người điều hành',
        
        showWinnerChat: 'Hiển thị chat của người thắng',
        timerDuration: 'Thời gian đếm ngược (giây):',
        animation: 'Hiệu ứng quay số:',
        animScramble: 'Xáo trộn ký tự',
        animNone: 'Không có',
        multipliers: 'Hệ số may mắn',
        platform: 'Nền tảng',
        botSettings: 'Cài đặt Bot',

        enableTwitchBot: 'Bật Bot Twitch',
        botUsername: 'Tên người dùng Bot (Twitch)',
        botUsernamePlaceholder: 'Tên bot của bạn',
        botToken: 'Token OAuth của Bot (Twitch)',

        useAnnouncementAuto: 'Gửi tin tự động dạng Thông báo',
        announcementColor: 'Màu thông báo:',
        modalAsAnnouncement: 'Dạng Thông báo (Twitch)',
        announcementScopeWarning: '⚠️ CHÚ Ý: Để sử dụng tính năng Thông báo, Token của bạn PHẢI có phạm vi (scope) "moderator:manage:announcements" được kích hoạt.\n\nVui lòng tạo token mới nếu bạn chưa làm vậy.',
        colorPrimary: 'Chính',
        colorBlue: 'Xanh dương',
        colorGreen: 'Xanh lá',
        colorOrange: 'Cam',
        colorPurple: 'Tím',

        startMessage: 'Tin nhắn bắt đầu quay số ({keyword})',
        announceMessage: 'Tin nhắn Người chiến thắng ({winner}, {platform}, {chance}%, {award})',
        defaultStartMessage: 'Một đợt quay số mới đã bắt đầu! Gõ {keyword} để tham gia!',
        defaultAnnounceMessage: 'Chúc mừng @{winner}, bạn đã thắng {award} từ {platform} với {chance}% cơ hội! 🎉',
        
        enableKickBot: 'Bật Bot Kick (qua Kicklet)',
        kickletApiToken: 'Token API Kicklet',
        kickStartMessage: 'Tin nhắn bắt đầu (Kick) ({keyword})',
        kickAnnounceMessage: 'Tin nhắn Người chiến thắng (Kick) ({winner}, {platform}, {chance}%, {award})',
        defaultKickStartMessage: 'Một đợt quay số mới đã bắt đầu! Gõ {keyword} để tham gia!',
        defaultKickAnnounceMessage: 'Chúc mừng @{winner}, bạn đã thắng {award} từ {platform} với {chance}% cơ hội! 🎉',
        
        kickletTokenTooltip: 'Lấy mã này từ Cài đặt Hồ sơ Kicklet CỦA BẠN <a href="https://kicklet.app/profile/settings" target="_blank">https://kicklet.app/profile/settings</a> đăng nhập vào tài khoản của bạn, đi tới "API tokens" và nhấp để tạo bot, chọn bất kỳ tên nào bạn muốn, sao chép và dán token vào đây<br><br>Điều này cho phép công cụ gửi tin nhắn dưới dạng bot Kicklet trong cuộc trò chuyện của bạn.',
        kickStartMessageTooltip: 'Tin nhắn mà bot Kicklet sẽ gửi khi bạn nhấp vào "Bắt đầu Quay số".<br><br><code>{keyword}</code> được thay thế bằng từ khóa của bạn.',
        
        announceMessageTooltip: 'Tin nhắn mà bot sẽ gửi. Biến: <br><code>{winner}</code>: tên người thắng.<br><code>{platform}</code>: "Kick" hoặc "Twitch".<br><code>{chance}</code>: % cơ hội của người thắng.<br><code>{award}</code>: giải thưởng được chọn trong hộp tin nhắn modal.',
        kickAnnounceMessageTooltip: 'Tin nhắn mà bot sẽ gửi. Biến: <br><code>{winner}</code>: tên người thắng.<br><code>{platform}</code>: "Kick" hoặc "Twitch".<br><code>{chance}</code>: % cơ hội của người thắng.<br><code>{award}</code>: giải thưởng được chọn trong hộp tin nhắn modal.',

        enableAwardsOverlay: 'Bảng Giải thưởng',
        awardsDv: 'DV (Đăng nhập)',
        awardsApiKey: 'Khóa API',
        awardsOverlayTooltip: 'Nhập thông tin xác thực cho tệp overlay.html của bạn.<br><br>Công cụ này chỉ lưu cài đặt; tệp overlay đọc chúng riêng biệt.',
        awardsPanelTitle: 'Giải thưởng hiện tại',
        awardsStatusLoading: 'Đang tải giải thưởng...',
        awardsStatusError: 'Kiểm tra thông tin xác thực trong cài đặt.',
        awardsStatusApiError: 'Lỗi API. Đang thử lại...',
        awardsStatusNoAwards: 'Không có giải thưởng nào.',
        awardAnnounceMessageLabel: 'Tin nhắn Thông báo Giải thưởng ({award})',
        awardAnnounceMessageTooltip: 'Tin nhắn mà bot sẽ gửi khi bạn nhấp vào một giải thưởng.<br><br><code>{award}</code> được thay thế bằng tên giải thưởng.',
        defaultAwardAnnounceMessage: 'Giải thưởng tiếp theo: {award}!',

        closedMessages: 'Tin nhắn "Dừng Tham gia"',
        closedMessagesDesc: 'Tin nhắn được gửi bởi bot khi bạn dừng nhận người tham gia.',
        twitchClosedMessage: 'Tin nhắn "Đóng" (Twitch)',
        kickClosedMessage: 'Tin nhắn "Đóng" (Kick)',
        closedMessageTooltip: 'Tin nhắn bot sẽ gửi khi bạn nhấp vào "Dừng Tham gia".',
        defaultTwitchClosedMessage: 'Đã đóng tham gia! Chúc may mắn.',
        defaultKickClosedMessage: 'Đã đóng tham gia! Chúc may mắn.',

        participants: 'Người tham gia',
        winners: 'Người chiến thắng',
        drawWinner: 'Quay Người thắng',
        pauseGiveaway: 'Dừng Tham gia',
        resumeGiveaway: 'Tiếp tục Tham gia',
        statusPaused: 'Đã tạm dừng tham gia.',
        reset: 'Đặt lại',
        drawAgain: 'Quay lại',
        ok: 'OK',
        
        statusWaiting: 'Nhấn "Bắt đầu Quay số" để kết nối với kênh chat.',
        saveSettings: 'Lưu Cài đặt',
        startGiveaway: 'Bắt đầu Quay số',
        
        enableModalSendMessage: 'Bật bảng gửi chat trên modal',
        modalSendMessageTitle: 'Gửi Tin nhắn Chat',
        modalMessagePlaceholder: 'Nhập tin nhắn để gửi đến cả hai kênh chat...',
        modalSendGlobalButton: 'Gửi Tin nhắn Toàn cầu',
        modalSendAwardButton: 'Gửi Giải thưởng',
        defaultAwardFallback: 'phần thưởng'
    }
};

// Função para definir o idioma
function setLanguage(lang) {
    if (!translations[lang]) lang = 'en'; 
    
    currentLang = lang;
    
    document.querySelectorAll('[data-lang-key]').forEach(el => {
        const key = el.dataset.langKey;
        if (el.tagName === 'SPAN' && translations[lang][key]) {
            el.textContent = translations[lang][key];
        } else if (el.tagName !== 'SPAN' && translations[lang][key]) {
            const firstChild = el.firstElementChild;
            if (firstChild && firstChild.tagName === 'SPAN' && firstChild.hasAttribute('data-lang-key')) {
                 // Não faz nada
            } else {
                if (el.id === 'pause-giveaway-button') {
                    if (!el.classList.contains('paused')) {
                        el.textContent = translations[lang][key];
                    }
                } else {
                    el.textContent = translations[lang][key];
                }
            }
        }
    });

    document.querySelectorAll('[placeholder-lang-key]').forEach(el => {
        const key = el.getAttribute('placeholder-lang-key');
        if (translations[lang][key]) {
            el.placeholder = translations[lang][key];
        }
    });

    localStorage.setItem('giveawayToolLang', lang);

    const langSelectLogin = document.getElementById('language-select-login');
    const langSelectSettings = document.getElementById('language-select-settings');
    if (langSelectLogin.value !== lang) langSelectLogin.value = lang;
    if (langSelectSettings.value !== lang) langSelectSettings.value = lang;
    
    // Atualiza opções do seletor de cor
    const colorSelect = document.getElementById('twitch-announcement-color-select');
    const modalColorSelect = document.getElementById('modal-announcement-color-select');
    if (colorSelect) updateSelectOptions(colorSelect, lang);
    if (modalColorSelect) updateSelectOptions(modalColorSelect, lang);
}

function updateSelectOptions(selectElement, lang) {
    for (let i = 0; i < selectElement.options.length; i++) {
        const key = selectElement.options[i].getAttribute('data-lang-key');
        if (key && translations[lang][key]) {
            selectElement.options[i].text = translations[lang][key];
        }
    }
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
    const showWinnerChatCheckbox = document.getElementById('show-winner-chat-checkbox');
    const enableModalSendMessageCheckbox = document.getElementById('enable-modal-send-message-checkbox'); 
    const winnerTimerDurationInput = document.getElementById('winner-timer-duration-input');
    const animationSelect = document.getElementById('animation-select');
    
    // === PAINEL DE PARTICIPAÇÃO ===
    const toggleParticipationPanel = document.getElementById('toggle-participation-panel');
    const participationSettingsWrapper = document.getElementById('participation-settings-wrapper');
    const participationEyeIconOpen = document.getElementById('participation-eye-icon-open');
    const participationEyeIconClosed = document.getElementById('participation-eye-icon-closed');
    const allowViewersCheckbox = document.getElementById('allow-viewers-checkbox');
    const allowSubsCheckbox = document.getElementById('allow-subs-checkbox');
    const allowVipsCheckbox = document.getElementById('allow-vips-checkbox');
    const allowModsCheckbox = document.getElementById('allow-mods-checkbox');
    
    const kickSubMultiplier = document.getElementById('kick-sub-multiplier');
    const kickVipMultiplier = document.getElementById('kick-vip-multiplier');
    const twitchSubMultiplier = document.getElementById('twitch-sub-multiplier');
    const twitchVipMultiplier = document.getElementById('twitch-vip-multiplier');
    
    const enableTwitchBotCheckbox = document.getElementById('enable-twitch-bot-checkbox');
    const twitchBotSettingsWrapper = document.getElementById('twitch-bot-settings-wrapper');
    const twitchBotUsernameInput = document.getElementById('twitch-bot-username-input');
    const twitchBotOauthInput = document.getElementById('twitch-bot-oauth-input');
    
    // NOVOS SELETORES DE ANÚNCIO
    const twitchUseAnnouncementCheckbox = document.getElementById('twitch-use-announcement-checkbox');
    const twitchAnnouncementColorSelect = document.getElementById('twitch-announcement-color-select');
    
    const startMessageInput = document.getElementById('start-message-input');
    const announcementMessageInput = document.getElementById('announcement-message-input');
    
    const enableKickBotCheckbox = document.getElementById('enable-kick-bot-checkbox');
    const kickBotSettingsWrapper = document.getElementById('kick-bot-settings-wrapper');
    const kickletApiTokenInput = document.getElementById('kicklet-api-token-input');
    const kickStartMessageInput = document.getElementById('kick-start-message-input');
    const kickAnnounceMessageInput = document.getElementById('kick-announcement-message-input');

    const toggleTwitchBotPanel = document.getElementById('toggle-twitch-bot-panel');
    const twitchEyeIconOpen = document.getElementById('twitch-eye-icon-open');
    const twitchEyeIconClosed = document.getElementById('twitch-eye-icon-closed');
    const toggleKickBotPanel = document.getElementById('toggle-kick-bot-panel');
    const kickEyeIconOpen = document.getElementById('kick-eye-icon-open');
    const kickEyeIconClosed = document.getElementById('kick-eye-icon-closed');
    
    const toggleMultipliersPanel = document.getElementById('toggle-multipliers-panel');
    const multipliersSettingsWrapper = document.getElementById('multipliers-settings-wrapper');
    const multipliersEyeIconOpen = document.getElementById('multipliers-eye-icon-open');
    const multipliersEyeIconClosed = document.getElementById('multipliers-eye-icon-closed');

    const toggleAwardsOverlayPanel = document.getElementById('toggle-awards-overlay-panel');
    const enableAwardsOverlayCheckbox = document.getElementById('enable-awards-overlay-checkbox');
    const awardsOverlaySettingsWrapper = document.getElementById('awards-overlay-settings-wrapper');
    const awardsEyeIconOpen = document.getElementById('awards-eye-icon-open');
    const awardsEyeIconClosed = document.getElementById('awards-eye-icon-closed');
    
    const awardsDvInput = document.getElementById('awards-dv-input');
    const awardsApiKeyInput = document.getElementById('awards-api-key-input');
    const awardAnnounceMessageInput = document.getElementById('award-announce-message-input'); 
    
    const awardsOverlayPanel = document.getElementById('awards-overlay-panel');
    const awardsListContainer = document.getElementById('awards-list-container');
    const awardsCount = document.getElementById('awards-count');
    const awardsStatusMessage = document.getElementById('awards-status-message');

    const toggleClosedMessagePanel = document.getElementById('toggle-closed-message-panel');
    const closedMessageSettingsWrapper = document.getElementById('closed-message-settings-wrapper');
    const eyeIconOpen = document.getElementById('eye-icon-open');
    const eyeIconClosed = document.getElementById('eye-icon-closed');
    const twitchClosedMessageInput = document.getElementById('twitch-closed-message-input');
    const kickClosedMessageInput = document.getElementById('kick-closed-message-input');
    
    const saveSettingsButton = document.getElementById('save-settings-button');
    const statusMessage = document.getElementById('status-message');
    const startGiveawayButton = document.getElementById('start-giveaway-button');
    
    const participantCount = document.getElementById('participant-count');
    const participantList = document.getElementById('participant-list');
    const drawButton = document.getElementById('draw-button');
    const resetButton = document.getElementById('reset-button');
    const pauseGiveawayButton = document.getElementById('pause-giveaway-button');
    
    const winnersCount = document.getElementById('winners-count');
    const winnersList = document.getElementById('winners-list');
    const winnersPanel = document.querySelector('.winners-panel');
    
    const multiWinnerModalContainer = document.getElementById('multi-winner-modal-container');
    const modalTemplate = document.getElementById('modal-template');
    
    const tooltipPopup = document.getElementById('tooltip-popup-container');
    
    // --- VARIÁVEIS DO MODAL ---
    let modalMessageInput = null;
    let modalSendGlobalButton = null;
    let modalSendAwardButton = null;
    let modalSendMessagePanel = null;
    let modalIsAnnouncementCheckbox = null;
    let modalAnnouncementColorSelect = null;

    // --- VARIÁVEIS DE ESTADO ---
    let kickChannel = null, twitchChannel = null;
    let kickChatroomId = null;
    let kickWs = null, twitchClient = null;
    let isGiveawayRunning = false;
    let participants = new Map();
    let allEntries = []; 
    let winners = [];
    let currentLang = 'en';
    
    let winningUsernames = new Set(); 

    let winnerCountdownInterval = null;
    let currentMonitoredWinnerId = null;
    let currentMonitoredChatbox = null;
    let hasWinnerResponded = false;
    
    let awardsApiTimer = null;
    let isAwardsLoading = false;
    let lastValidAwards = [];
    let awardsApiAttempts = 0;
    let awardsUsingProxy = false;
    
    let lastModalMessage = ''; 
    let currentAwardName = '';

    // --- PERSISTÊNCIA MODAL ---
    let lastModalAnnouncementState = false;
    let lastModalAnnouncementColor = 'primary';
    
    // --- NOVAS VARIÁVEIS PARA API DA TWITCH (ANÚNCIO) ---
    let twitchClientId = null;
    let twitchBroadcasterId = null;
    let twitchBotId = null;


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
    
    function isUserAllowed(userStatus) {
        if (userStatus.isMod) return allowModsCheckbox.checked;
        if (userStatus.isVip) return allowVipsCheckbox.checked;
        if (userStatus.isSub) return allowSubsCheckbox.checked;
        return allowViewersCheckbox.checked;
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

    // --- FUNÇÃO: Enviar Mensagem via Kicklet ---
    async function sendKickletMessage(messageContent) {
        const token = kickletApiTokenInput.value.trim();
        if (!enableKickBotCheckbox.checked || !token || !messageContent) {
            return;
        }
        try {
            await fetch('https://kicklet.app/api/kick/message', {
                method: 'POST',
                headers: { 'Authorization': `apitoken ${token}`, 'Content-Type': 'application/json', 'Accept': 'application/json' },
                body: JSON.stringify({ content: messageContent })
            });
        } catch (error) {
            console.error('Falha na requisição ao Kicklet:', error);
        }
    }
    
    // --- NOVO: FUNÇÃO PARA VALIDAR TOKEN E PEGAR IDs DA TWITCH ---
    async function validateTwitchTokenAndGetIds() {
        const oauthToken = twitchBotOauthInput.value.trim();
        if (!oauthToken || !twitchChannel || !enableTwitchBotCheckbox.checked) return;

        // 1. Limpa o prefixo "oauth:" se existir, para chamadas de API
        const cleanToken = oauthToken.startsWith('oauth:') ? oauthToken.slice(6) : oauthToken;

        try {
            // A. Validar Token para pegar Client ID e User ID do Bot
            const validateRes = await fetch('https://id.twitch.tv/oauth2/validate', {
                headers: { 'Authorization': `OAuth ${cleanToken}` }
            });
            if (!validateRes.ok) throw new Error('Twitch Token Validation Failed');
            const validateData = await validateRes.json();
            
            twitchClientId = validateData.client_id;
            twitchBotId = validateData.user_id;

            // B. Pegar ID do Broadcaster (Canal)
            const userRes = await fetch(`https://api.twitch.tv/helix/users?login=${twitchChannel}`, {
                headers: {
                    'Client-Id': twitchClientId,
                    'Authorization': `Bearer ${cleanToken}`
                }
            });
            if (!userRes.ok) throw new Error('Failed to get Broadcaster ID');
            const userData = await userRes.json();
            
            if (userData.data && userData.data.length > 0) {
                twitchBroadcasterId = userData.data[0].id;
                console.log('Twitch IDs Loaded:', { twitchClientId, twitchBotId, twitchBroadcasterId });
            }

        } catch (e) {
            console.error('Erro ao validar Twitch IDs:', e);
            // Não paramos o fluxo, pois o chat via IRC (TMI.js) ainda pode funcionar
        }
    }

    // --- NOVO: FUNÇÃO PARA ENVIAR ANÚNCIO (HELIX API) ---
    async function sendTwitchAnnouncement(messageContent, color = 'primary') {
        const oauthToken = twitchBotOauthInput.value.trim();
        if (!oauthToken || !twitchClientId || !twitchBroadcasterId || !twitchBotId) {
            console.warn('Faltam dados para enviar anúncio (IDs ou Token). Usando chat normal.');
            // Fallback para chat normal
            return sendTwitchChat(messageContent);
        }

        const cleanToken = oauthToken.startsWith('oauth:') ? oauthToken.slice(6) : oauthToken;

        try {
            const url = `https://api.twitch.tv/helix/chat/announcements?broadcaster_id=${twitchBroadcasterId}&moderator_id=${twitchBotId}`;
            
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Client-Id': twitchClientId,
                    'Authorization': `Bearer ${cleanToken}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    message: messageContent,
                    color: color // blue, green, orange, purple, primary
                })
            });

            if (!response.ok) {
                const errText = await response.text();
                throw new Error(`API Error: ${response.status} - ${errText}`);
            }
            console.log('Anúncio Twitch enviado com sucesso.');

        } catch (error) {
            console.error('Falha ao enviar anúncio Twitch:', error);
            // Fallback silencioso para chat normal em caso de erro
            sendTwitchChat(messageContent);
        }
    }

    // Função para envio via IRC (TMI.js) - Antiga sendTwitchMessage renomeada
    function sendTwitchChat(messageContent) {
        const botUsername = twitchBotUsernameInput.value.trim();
        const botOauth = twitchBotOauthInput.value.trim();
        
        if (!twitchChannel || !enableTwitchBotCheckbox.checked || !botUsername || !botOauth || !messageContent) {
            return; 
        }

        if (twitchClient && twitchClient.readyState() === 'OPEN') {
            twitchClient.say(twitchChannel, messageContent)
                .catch((err) => console.error('Erro ao enviar mensagem (Twitch principal):', err));
        } else {
            // Conexão temporária
            const tempClient = new tmi.Client({
                connection: { secure: true, reconnect: false },
                identity: { username: botUsername, password: botOauth },
                channels: [twitchChannel]
            });
            tempClient.once('connected', () => {
                tempClient.say(twitchChannel, messageContent)
                    .then(() => tempClient.disconnect())
                    .catch((err) => { console.error(err); tempClient.disconnect(); });
            });
            tempClient.connect().catch(console.error);
        }
    }
    
    // Função unificada que decide se manda Anúncio ou Chat
    function sendTwitchMessage(messageContent, forceAnnouncement = false, announcementColor = 'primary') {
        if (forceAnnouncement) {
            sendTwitchAnnouncement(messageContent, announcementColor);
        } else {
            sendTwitchChat(messageContent);
        }
    }
    
    function sendTwitchClosedMessage() {
        // Mensagens de "Closed" respeitam a config global de anúncio
        const useAnnounce = twitchUseAnnouncementCheckbox.checked;
        const color = twitchAnnouncementColorSelect.value;
        sendTwitchMessage(twitchClosedMessageInput.value, useAnnounce, color);
    }

    function sendKickClosedMessage() {
        sendKickletMessage(kickClosedMessageInput.value);
    }
    
    // --- LÓGICA DE ENVIO DE MENSAGEM DO MODAL ---
    function handleSendGlobalMessageFromModal() {
        const message = modalMessageInput.value.trim();
        if (!message) return;
        
        // Twitch: Verifica checkbox do modal
        const useAnnounce = modalIsAnnouncementCheckbox.checked;
        const color = modalAnnouncementColorSelect.value;
        sendTwitchMessage(message, useAnnounce, color);

        // Kick
        sendKickletMessage(message);
    }
    
    function handleSendAwardMessageFromModal() {
        const message = modalMessageInput.value.trim();
        if (!message) return;
        
        currentAwardName = message;

        const useAnnounce = modalIsAnnouncementCheckbox.checked;
        const color = modalAnnouncementColorSelect.value;
        sendTwitchMessage(message, useAnnounce, color);

        sendKickletMessage(message);
    }
    // --- FIM DA LÓGICA DE ENVIO DE MENSAGEM DO MODAL ---


    async function handleStartGiveaway() {
        if (!kickChannel && !twitchChannel) {
            showAlert('alertNoChannel');
            return;
        }
        
        resetGiveawayState();
        currentAwardName = ''; 
        isGiveawayRunning = true;
        setInputsDisabled(true);
        statusMessage.textContent = translations[currentLang].statusConnected;
        statusMessage.className = 'status-connected';

        const botUsername = twitchBotUsernameInput.value.trim();
        const botOauth = twitchBotOauthInput.value.trim();
        
        // 1. VALIDAÇÃO DE TOKEN E OBTENÇÃO DE IDS (Para Anúncios)
        if (twitchChannel && enableTwitchBotCheckbox.checked && botUsername && botOauth) {
            await validateTwitchTokenAndGetIds(); // Espera obter os IDs antes de continuar
            
            const sendMessage = () => {
                const messageTemplate = startMessageInput.value;
                if (!messageTemplate) return; 

                let keyword = keywordInput.value.trim();
                let keywordText = (keyword === '') ? translations[currentLang].keywordAnyMessage : keyword;
                let message = messageTemplate.replace('{keyword}', keywordText);
                
                // Usa configuração global de anúncio
                const useAnnounce = twitchUseAnnouncementCheckbox.checked;
                const color = twitchAnnouncementColorSelect.value;
                sendTwitchMessage(message, useAnnounce, color);
            };

            if (twitchClient) {
                twitchClient.disconnect();
                twitchClient = null;
            }

            twitchClient = new tmi.Client({
                connection: { secure: true, reconnect: true },
                identity: { username: botUsername, password: botOauth },
                channels: [twitchChannel]
            });
            
            twitchClient.once('connected', () => {
                console.log('Cliente TMI principal conectado.');
                sendMessage(); 
                statusMessage.textContent = translations[currentLang].statusConnected;
                statusMessage.className = 'status-connected';
            });
            
            twitchClient.on('message', (channel, userstate, message, self) => {
                if (self) return;
                handleTwitchMessage(userstate, message);
            });

            twitchClient.connect().catch(console.error);
        }
        
        if (kickChannel && enableKickBotCheckbox.checked) {
            const messageTemplate = kickStartMessageInput.value;
            if (messageTemplate) {
                let keyword = keywordInput.value.trim();
                let keywordText = (keyword === '') ? translations[currentLang].keywordAnyMessage : keyword;
                let message = messageTemplate.replace('{keyword}', keywordText);
                sendKickletMessage(message);
            }
        }

        if (kickChannel) connectToKick();
        
        if (!twitchClient && twitchChannel && !enableTwitchBotCheckbox.checked) {
            connectToTwitch();
        }
    }
    
    function handlePauseGiveaway() {
        isGiveawayRunning = !isGiveawayRunning; 

        if (isGiveawayRunning) {
            pauseGiveawayButton.textContent = translations[currentLang].pauseGiveaway;
            pauseGiveawayButton.classList.remove('paused');
            statusMessage.textContent = translations[currentLang].statusConnected;
            statusMessage.className = 'status-connected';
            startGiveawayButton.disabled = true;
        } else {
            pauseGiveawayButton.textContent = translations[currentLang].resumeGiveaway;
            pauseGiveawayButton.classList.add('paused');
            statusMessage.textContent = translations[currentLang].statusPaused;
            statusMessage.className = 'status-waiting';
            startGiveawayButton.disabled = true;

            sendTwitchClosedMessage();
            sendKickClosedMessage();
        }
    }
    
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
            const timerDisplay = multiWinnerModalContainer.querySelector('#modal-timer-display');
            if (timerDisplay) {
                timerDisplay.style.color = 'var(--success-color)';
                timerDisplay.style.borderColor = 'var(--success-color)';
            }
        }
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
                statusMessage.textContent = translations[currentLang].statusConnected;
                statusMessage.className = 'status-connected';
            }
            if (parsed.event === 'App\\Events\\ChatMessageEvent') {
                handleKickMessage(JSON.parse(parsed.data));
            }
        };
        kickWs.onerror = (error) => {
            statusMessage.textContent = translations[currentLang].kickError;
            statusMessage.className = 'status-error';
        };
        kickWs.onclose = () => {
            if (isGiveawayRunning) {
                statusMessage.textContent = translations[currentLang].kickLost;
                statusMessage.className = 'status-error';
            }
        };
    }

    function handleKickMessage(msgData) {
        const user = msgData.sender;
        if (!user) return;
        
        const uniqueId = `kick-${user.username}`;
        const messageContent = msgData.content.trim();

        if (currentMonitoredWinnerId === uniqueId && currentMonitoredChatbox) {
            appendMessageToWinnerChat(messageContent, currentMonitoredChatbox);
            stopWinnerTimer();
        }
        
        if (!isGiveawayRunning) return;

        const usernameLower = user.username.toLowerCase();
        if (winningUsernames.has(usernameLower)) return;
        
        const keyword = keywordInput.value.trim().toLowerCase();
        if (keyword !== '' && messageContent.toLowerCase() !== keyword) return;
        
        const badges = user.identity?.badges || [];
        const isMod = badges.some(b => b.type === 'moderator' || b.type === 'broadcaster');
        const isSub = badges.some(b => b.type === 'subscriber' || b.type === 'founder');
        const isVip = badges.some(b => (b.type && (b.type.toLowerCase() === 'vip' || b.type.toLowerCase() === 'og')) || (b.text && (b.text.toLowerCase() === 'vip' || b.text.toLowerCase() === 'og')));
        
        const userStatus = { isMod, isSub, isVip };
        if (!isUserAllowed(userStatus)) return;

        if (participants.has(uniqueId)) return;
        if (!allowMultiPlatformCheckbox.checked && Array.from(participants.values()).some(p => p.username.toLowerCase() === usernameLower && !p.hasWon)) return;

        addParticipant(user.username, 'kick', userStatus);
    }
    
    // --- LÓGICA DO TWITCH ---
    function connectToTwitch() {
        if (twitchClient && twitchClient.readyState() === 'OPEN') return;
        
        const botUsername = twitchBotUsernameInput.value.trim();
        const botOauth = twitchBotOauthInput.value.trim();
        const identity = (enableTwitchBotCheckbox.checked && botUsername && botOauth) ? { username: botUsername, password: botOauth } : null;
        
        twitchClient = new tmi.Client({
            connection: { secure: true, reconnect: true },
            identity: identity,
            channels: [twitchChannel]
        });
        
        twitchClient.on('connected', () => {
            if (isGiveawayRunning) {
                statusMessage.textContent = translations[currentLang].statusConnected;
                statusMessage.className = 'status-connected';
            }
        });
        
        twitchClient.on('message', (channel, userstate, message, self) => {
            if (self && (!identity || userstate.username.toLowerCase() !== identity.username.toLowerCase())) return;
            handleTwitchMessage(userstate, message);
        });
        
        twitchClient.connect().catch(console.error);
    }

    function handleTwitchMessage(userstate, message) {
        const username = userstate['display-name'];
        const uniqueId = `twitch-${username}`;
        const messageContent = message.trim();

        if (currentMonitoredWinnerId === uniqueId && currentMonitoredChatbox) {
            appendMessageToWinnerChat(messageContent, currentMonitoredChatbox);
            stopWinnerTimer();
        }

        if (!isGiveawayRunning) return;
        
        const usernameLower = username.toLowerCase();
         if (winningUsernames.has(usernameLower)) return;
        
        const keyword = keywordInput.value.trim().toLowerCase();
        if (keyword !== '' && messageContent.toLowerCase() !== keyword) return;
        
        const isMod = userstate.mod || userstate.badges?.broadcaster;
        const isSub = userstate.subscriber || userstate.badges?.founder === '0';
        const isVip = !!userstate.vip;
        
        const userStatus = { isMod, isSub, isVip };
        if (!isUserAllowed(userStatus)) return;

        if (participants.has(uniqueId)) return;
        if (!allowMultiPlatformCheckbox.checked && Array.from(participants.values()).some(p => p.username.toLowerCase() === usernameLower && !p.hasWon)) return;
        
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
                entries = Math.max(entries, parseInt(kickSubMultiplier.value, 10) || 1);
                tags.push({ text: 'SUB', class: 'sub' });
            }
            if (status.isVip) {
                entries = Math.max(entries, parseInt(kickVipMultiplier.value, 10) || 1);
                tags.push({ text: 'VIP', class: 'vip' });
            }
        } else if (platform === 'twitch') {
            if (status.isSub) {
                entries = Math.max(entries, parseInt(twitchSubMultiplier.value, 10) || 1);
                 tags.push({ text: 'SUB', class: 'sub' });
            }
            if (status.isVip) {
                entries = Math.max(entries, parseInt(twitchVipMultiplier.value, 10) || 1);
                 tags.push({ text: 'VIP', class: 'vip' });
            }
        }
        
        participants.set(uniqueId, { username, platform, entries, tags, hasWon: false });
        updateParticipantListUI();
    }


    function drawWinner() {
        allEntries = [];
        participants.forEach((p, id) => {
            if (!p.hasWon) {
                for (let i = 0; i < p.entries; i++) {
                    allEntries.push(id);
                }
            }
        });

        if (allEntries.length === 0) {
            showAlert('alertNoParticipants');
            return;
        }
        drawButton.disabled = true;
        
        const winnerUniqueId = allEntries[Math.floor(Math.random() * allEntries.length)];
        const winnerObject = participants.get(winnerUniqueId);
        
        if (!winnerObject) {
            drawButton.disabled = allEntries.length === 0;
            if (allEntries.length > 0) drawWinner();
            return;
        }
        
        const winnerName = winnerObject.username;
        const winnerPlatform = winnerObject.platform;
        const winnerEntries = winnerObject.entries;
        const totalEntriesInDraw = allEntries.length;
        const chancePercent = ((winnerEntries / totalEntriesInDraw) * 100).toFixed(1);
        
        displayWinnerAnimation(winnerName, winnerUniqueId, winnerPlatform, chancePercent).then(() => {});
    }
    
    function announceWinnerOnTwitch(winnerName, platform, chancePercent, awardName) {
        const messageTemplate = announcementMessageInput.value;
        const platformName = platform.charAt(0).toUpperCase() + platform.slice(1);
        let message = messageTemplate
            .replace('{winner}', winnerName)
            .replace('{platform}', platformName)
            .replace(/{chance}/g, chancePercent)
            .replace(/{award}/g, awardName);
        
        // Usa configuração global para o anúncio automático do vencedor
        const useAnnounce = twitchUseAnnouncementCheckbox.checked;
        const color = twitchAnnouncementColorSelect.value;
        sendTwitchMessage(message, useAnnounce, color);
    }
    
    function announceWinnerOnKick(winnerName, platform, chancePercent, awardName) {
        if (kickChannel && enableKickBotCheckbox.checked) {
            const messageTemplate = kickAnnounceMessageInput.value;
            if (messageTemplate) {
                const platformName = platform.charAt(0).toUpperCase() + platform.slice(1);
                let message = messageTemplate
                    .replace('{winner}', winnerName)
                    .replace('{platform}', platformName)
                    .replace(/{chance}/g, chancePercent)
                    .replace(/{award}/g, awardName);
                sendKickletMessage(message);
            }
        }
    }


    // --- FUNÇÕES DE UI E ESTADO ---
    function updateParticipantListUI() {
        participantList.innerHTML = '';
        const modalParticipantList = multiWinnerModalContainer.querySelector('#modal-participant-list'); 
        if (modalParticipantList) modalParticipantList.innerHTML = ''; 

        participants.forEach((p, id) => {
            const li = document.createElement('li');
            li.dataset.uniqueId = id; 
            
            const icon = document.createElement('img');
            icon.className = 'platform-icon';
            icon.src = p.platform === 'kick' ? 'https://kick.com/favicon.ico' : 'https://www.twitch.tv/favicon.ico';
            icon.alt = `${p.platform} icon`;
            li.appendChild(icon);
            
            const nameSpan = document.createElement('span');
            nameSpan.textContent = p.username;
            li.appendChild(nameSpan);
            
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
            
            participantList.prepend(li); 

            if (modalParticipantList) {
                const modalLi = li.cloneNode(true); 
                if (p.hasWon) {
                    modalLi.style.textDecoration = ''; 
                    modalLi.style.opacity = '';      
                    modalLi.classList.add('winner'); 
                }
                modalParticipantList.prepend(modalLi); 
            }
        });
        
        participantCount.textContent = participants.size;
        const modalCountSpan = multiWinnerModalContainer.querySelector('#modal-participant-count');
        if(modalCountSpan) modalCountSpan.textContent = participants.size;

        allEntries = [];
        participants.forEach((p, id) => {
            if (!p.hasWon) {
                for (let i = 0; i < p.entries; i++) {
                    allEntries.push(id);
                }
            }
        });
        
        const isDisabled = allEntries.length === 0;
        drawButton.disabled = isDisabled;
        const modalDrawAgainButton = multiWinnerModalContainer.querySelector('.modal-draw-again-button');
        if (modalDrawAgainButton) modalDrawAgainButton.disabled = isDisabled;
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
        winningUsernames.clear(); 
        updateWinnersListUI();
        
        if (kickWs) kickWs.close();
        if (twitchClient) {
             twitchClient.removeAllListeners(); 
             twitchClient.disconnect();
             twitchClient = null; 
        }
        
        if (winnerCountdownInterval) clearInterval(winnerCountdownInterval);
        winnerCountdownInterval = null;
        currentMonitoredWinnerId = null;
        currentMonitoredChatbox = null;
        hasWinnerResponded = false;
        currentAwardName = ''; 
        
        isGiveawayRunning = false;
        setInputsDisabled(false);
        statusMessage.textContent = translations[currentLang].statusWaiting;
        statusMessage.className = 'status-waiting';
        connectedKickChannel.classList.remove('platform-kick');
        connectedTwitchChannel.classList.remove('platform-twitch');

        pauseGiveawayButton.textContent = translations[currentLang].pauseGiveaway;
        pauseGiveawayButton.classList.remove('paused');
    }

    function toggleParticipantDisqualification(uniqueId) {
        if (!participants.has(uniqueId)) return;
        const participant = participants.get(uniqueId);
        participant.hasWon = !participant.hasWon;
        if (participant.hasWon) winningUsernames.add(participant.username.toLowerCase());
        else winningUsernames.delete(participant.username.toLowerCase());
        updateParticipantListUI();
    }
    
    function setInputsDisabled(disabled) {
        const inputs = [
            keywordInput, allowMultiPlatformCheckbox, animationSelect,
            kickSubMultiplier, kickVipMultiplier, twitchSubMultiplier, twitchVipMultiplier,
            enableTwitchBotCheckbox,
            twitchBotUsernameInput, twitchBotOauthInput, announcementMessageInput, startMessageInput,
            // Novos inputs Twitch
            twitchUseAnnouncementCheckbox, twitchAnnouncementColorSelect,
            enableKickBotCheckbox, 
            kickletApiTokenInput, kickStartMessageInput, kickAnnounceMessageInput,
            twitchClosedMessageInput, kickClosedMessageInput,
            startGiveawayButton, connectButton, kickChannelInput, twitchChannelInput,
            winnerTimerDurationInput,
            languageSelectLogin, languageSelectSettings,
            showWinnerChatCheckbox,
            enableModalSendMessageCheckbox,
            enableAwardsOverlayCheckbox,
            awardsDvInput,
            awardsApiKeyInput,
            awardAnnounceMessageInput,
            allowViewersCheckbox,
            allowSubsCheckbox,
            allowVipsCheckbox,
            allowModsCheckbox
        ];
        inputs.forEach(input => input.disabled = disabled);
        
        document.querySelectorAll('.collapsible-header .toggle-visibility-button').forEach(btn => {
            btn.style.opacity = disabled ? '0.5' : '1';
            btn.style.cursor = disabled ? 'not-allowed' : 'pointer';
        });
        pauseGiveawayButton.disabled = !disabled; 
        startGiveawayButton.disabled = disabled;
    }
    
    function formatTime(seconds) {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }

    function adjustWinnerFontSize(nameElement, containerElement) {
        nameElement.style.fontSize = '2.5rem';
        let nameWidth = nameElement.scrollWidth;
        let currentFontSize = 2.5;
        while (nameWidth > containerElement.clientWidth && currentFontSize > 1.0) {
            currentFontSize -= 0.1;
            nameElement.style.fontSize = `${currentFontSize}rem`;
            nameWidth = nameElement.scrollWidth;
        }
    }

    function displayWinnerAnimation(winnerName, winnerUniqueId, platform, chancePercent) {
        return new Promise(resolve => {
            if (winnerCountdownInterval) clearInterval(winnerCountdownInterval);
            
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
            
            modalMessageInput = modalInstance.querySelector('#modal-message-input');
            modalSendGlobalButton = modalInstance.querySelector('#modal-send-global-button');
            modalSendAwardButton = modalInstance.querySelector('#modal-send-award-button');
            modalSendMessagePanel = modalInstance.querySelector('.modal-send-message-panel');
            // NOVOS SELETORES DO MODAL
            modalIsAnnouncementCheckbox = modalInstance.querySelector('#modal-is-announcement-checkbox');
            modalAnnouncementColorSelect = modalInstance.querySelector('#modal-announcement-color-select');
            
            // Atualiza traduções no select do modal
            updateSelectOptions(modalAnnouncementColorSelect, currentLang);
            
            // RESTAURA ESTADO DO MODAL
            modalIsAnnouncementCheckbox.checked = lastModalAnnouncementState;
            if (lastModalAnnouncementColor) {
                modalAnnouncementColorSelect.value = lastModalAnnouncementColor;
            }
            
            // EVENTOS DE MUDANÇA NO MODAL
            modalIsAnnouncementCheckbox.addEventListener('change', (e) => {
                lastModalAnnouncementState = e.target.checked;
                if (e.target.checked) {
                    alert(translations[currentLang].announcementScopeWarning);
                }
            });
            modalAnnouncementColorSelect.addEventListener('change', (e) => {
                lastModalAnnouncementColor = e.target.value;
            });

            if (lastModalMessage) modalMessageInput.value = lastModalMessage;

            if (enableModalSendMessageCheckbox.checked) {
                modalSendMessagePanel.style.display = 'flex';
                modalSendGlobalButton.addEventListener('click', handleSendGlobalMessageFromModal);
                modalSendAwardButton.addEventListener('click', handleSendAwardMessageFromModal);
                modalMessageInput.addEventListener('keydown', (e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault();
                        handleSendAwardMessageFromModal(); 
                    }
                });
            } else {
                modalSendMessagePanel.style.display = 'none';
            }
            
            modalMessageInput.setAttribute('placeholder', translations[currentLang].modalMessagePlaceholder);

            // --- Lógica do Painel de Prêmios do Modal ---
            const modalAwardsPanel = modalInstance.querySelector('#modal-awards-panel');
            const modalAwardsList = modalInstance.querySelector('#modal-awards-list-container');
            const modalAwardsCount = modalInstance.querySelector('#modal-awards-count');
            
            if (enableAwardsOverlayCheckbox.checked) {
                modalAwardsPanel.style.display = 'flex';
                modalAwardsList.innerHTML = '';
                if (lastValidAwards.length > 0) {
                    lastValidAwards.forEach(award => {
                        const card = document.createElement('div');
                        card.className = 'award-card';
                        card.dataset.awardName = award?.name || '—';
                        if (award?.name === currentAwardName) {
                            card.classList.add('selected');
                            card.style.borderColor = 'var(--primary-color)';
                            card.style.boxShadow = '0 0 10px var(--primary-color)';
                        }
                        const tag = document.createElement('div');
                        tag.className = 'award-card__tag';
                        card.appendChild(tag);
                        const title = document.createElement('div');
                        title.className = 'award-card__title';
                        title.textContent = award?.name || '—';
                        card.appendChild(title);
                        modalAwardsList.appendChild(card);
                    });
                } else {
                    modalAwardsList.innerHTML = `<div class="empty">${translations[currentLang].awardsStatusNoAwards}</div>`;
                }
                modalAwardsCount.textContent = lastValidAwards.length;
            } else {
                modalAwardsPanel.style.display = 'none';
            }
            
            modalInstance.addEventListener('click', (e) => {
                const li = e.target.closest('#modal-participant-list li[data-unique-id]');
                if (li) {
                    const uniqueId = li.dataset.uniqueId;
                    toggleParticipantDisqualification(uniqueId);
                    return; 
                }
                const card = e.target.closest('.award-card');
                if (card) {
                    const awardName = card.dataset.awardName;
                    if (awardName) {
                        currentAwardName = awardName; 
                        sendAwardAnnouncement(awardName);
                        
                        modalAwardsList.querySelectorAll('.award-card').forEach(c => {
                            c.classList.remove('selected');
                            c.style.borderColor = 'var(--card-border-color)';
                            c.style.boxShadow = 'var(--card-shadow)';
                        });
                        card.classList.add('selected');
                        card.style.borderColor = 'var(--primary-color)';
                        card.style.boxShadow = '0 0 10px var(--primary-color)';
                    }
                }
            });

            const modalParticipantList = modalInstance.querySelector('#modal-participant-list');
            confirmButton.textContent = translations[currentLang].ok;
            drawAgainButton.textContent = translations[currentLang].drawAgain;

            winners.push({ name: winnerName, date: new Date().toLocaleString() });
            const winnerObject = participants.get(winnerUniqueId);
            if (winnerObject) {
              winnerObject.hasWon = true; 
              winningUsernames.add(winnerObject.username.toLowerCase()); 
            }
            saveSettings();
            updateWinnersListUI();

            function closeModalAndClearTimer() {
                if (winnerCountdownInterval) clearInterval(winnerCountdownInterval);
                winnerCountdownInterval = null;
                if (modalMessageInput) {
                    lastModalMessage = modalMessageInput.value;
                    modalSendGlobalButton.removeEventListener('click', handleSendGlobalMessageFromModal);
                    modalSendAwardButton.removeEventListener('click', handleSendAwardMessageFromModal);
                }
                currentMonitoredWinnerId = null;
                currentMonitoredChatbox = null;
                hasWinnerResponded = false;
                modalMessageInput = null;
                multiWinnerModalContainer.style.display = 'none';
                multiWinnerModalContainer.innerHTML = '';
                updateParticipantListUI();
            }
            
            confirmButton.onclick = () => {
                currentAwardName = ''; 
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
            updateParticipantListUI(); 

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

                const winnerObject = participants.get(winnerUniqueId);
                if (winnerObject && winnerObject.tags.length > 0) {
                    const tagsContainer = document.createElement('div');
                    tagsContainer.className = 'status-tags-container';
                    winnerObject.tags.forEach(tagInfo => {
                        const tagSpan = document.createElement('span');
                        tagSpan.className = `status-tag ${tagInfo.class}`;
                        tagSpan.textContent = tagInfo.text;
                        tagsContainer.appendChild(tagSpan);
                    });
                    animationBox.appendChild(tagsContainer);
                }
                adjustWinnerFontSize(winnerNameEl, animationBox);

                let finalAwardName = currentAwardName; 
                if (!finalAwardName && modalMessageInput) finalAwardName = modalMessageInput.value.trim();
                if (!finalAwardName) finalAwardName = translations[currentLang].defaultAwardFallback; 
                
                announceWinnerOnTwitch(winnerName, platform, chancePercent, finalAwardName);
                announceWinnerOnKick(winnerName, platform, chancePercent, finalAwardName);

                const modalListItems = modalParticipantList.querySelectorAll('li');
                modalListItems.forEach(li => {
                    if (li.classList.contains('winner')) li.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
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
    
    function saveSettings() {
        const settings = {
            kickChannel: kickChannelInput.value,
            twitchChannel: twitchChannelInput.value,
            kickSubMultiplier: kickSubMultiplier.value,
            kickVipMultiplier: kickVipMultiplier.value,
            twitchSubMultiplier: twitchSubMultiplier.value,
            twitchVipMultiplier: twitchVipMultiplier.value,
            winners: winners,
            timerDuration: winnerTimerDurationInput.value,
            showWinnerChat: showWinnerChatCheckbox.checked,
            enableModalSendMessage: enableModalSendMessageCheckbox.checked, 
            
            enableTwitchBot: enableTwitchBotCheckbox.checked,
            twitchBotUsername: twitchBotUsernameInput.value,
            twitchBotOauth: twitchBotOauthInput.value, 
            
            // Salva novas configs
            twitchUseAnnouncement: twitchUseAnnouncementCheckbox.checked,
            twitchAnnouncementColor: twitchAnnouncementColorSelect.value,
            
            startMessage: startMessageInput.value, 
            announcementMessage: announcementMessageInput.value,
            
            enableKickBot: enableKickBotCheckbox.checked,
            kickletApiToken: kickletApiTokenInput.value,
            kickStartMessage: kickStartMessageInput.value,
            kickAnnounceMessage: kickAnnounceMessageInput.value,

            twitchClosedMessage: twitchClosedMessageInput.value,
            kickClosedMessage: kickClosedMessageInput.value,

            enableAwardsOverlay: enableAwardsOverlayCheckbox.checked,
            awardsDv: awardsDvInput.value,
            awardsApiKey: awardsApiKeyInput.value,
            awardAnnounceMessage: awardAnnounceMessageInput.value,
            
            allowViewers: allowViewersCheckbox.checked,
            allowSubs: allowSubsCheckbox.checked,
            allowVips: allowVipsCheckbox.checked,
            allowMods: allowModsCheckbox.checked
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
            winners = settings.winners || [];
            updateWinnersListUI();
            winnerTimerDurationInput.value = settings.timerDuration || '30';
            showWinnerChatCheckbox.checked = settings.showWinnerChat !== false;
            enableModalSendMessageCheckbox.checked = settings.enableModalSendMessage || false; 
            
            enableTwitchBotCheckbox.checked = settings.enableTwitchBot || false;
            twitchBotUsernameInput.value = settings.twitchBotUsername || '';
            twitchBotOauthInput.value = settings.twitchBotOauth || '';
            
            // Carrega novas configs
            twitchUseAnnouncementCheckbox.checked = settings.twitchUseAnnouncement || false;
            twitchAnnouncementColorSelect.value = settings.twitchAnnouncementColor || 'primary';
            
            startMessageInput.value = settings.startMessage || translations[currentLang].defaultStartMessage; 
            announcementMessageInput.value = settings.announcementMessage || translations[currentLang].defaultAnnounceMessage;

            enableKickBotCheckbox.checked = settings.enableKickBot || false;
            kickletApiTokenInput.value = settings.kickletApiToken || '';
            kickStartMessageInput.value = settings.kickStartMessage || translations[currentLang].defaultKickStartMessage;
            kickAnnounceMessageInput.value = settings.kickAnnounceMessage || translations[currentLang].defaultKickAnnounceMessage; 

            twitchClosedMessageInput.value = settings.twitchClosedMessage || translations[currentLang].defaultTwitchClosedMessage;
            kickClosedMessageInput.value = settings.kickClosedMessage || translations[currentLang].defaultKickClosedMessage;

            enableAwardsOverlayCheckbox.checked = settings.enableAwardsOverlay || false;
            awardsDvInput.value = settings.awardsDv || '';
            awardsApiKeyInput.value = settings.awardsApiKey || '';
            awardAnnounceMessageInput.value = settings.awardAnnounceMessage || translations[currentLang].defaultAwardAnnounceMessage;
            
            allowViewersCheckbox.checked = settings.allowViewers !== false;
            allowSubsCheckbox.checked = settings.allowSubs !== false;
            allowVipsCheckbox.checked = settings.allowVips !== false;
            allowModsCheckbox.checked = settings.allowMods || false;

            if (enableAwardsOverlayCheckbox.checked) startAwardsMonitor();
        } else {
             // DEFAULT VALUES EM CASO DE PRIMEIRO ACESSO
             startMessageInput.value = translations[currentLang].defaultStartMessage;
             announcementMessageInput.value = translations[currentLang].defaultAnnounceMessage; 
             kickStartMessageInput.value = translations[currentLang].defaultKickStartMessage;
             kickAnnounceMessageInput.value = translations[currentLang].defaultKickAnnounceMessage; 
             winnerTimerDurationInput.value = '30';
             showWinnerChatCheckbox.checked = true;
             enableModalSendMessageCheckbox.checked = false;
             twitchClosedMessageInput.value = translations[currentLang].defaultTwitchClosedMessage;
             kickClosedMessageInput.value = translations[currentLang].defaultKickClosedMessage;
             awardAnnounceMessageInput.value = translations[currentLang].defaultAwardAnnounceMessage;
             allowViewersCheckbox.checked = true;
             allowSubsCheckbox.checked = true;
             allowVipsCheckbox.checked = true;
             allowModsCheckbox.checked = false;
        }
    }

    // --- LÓGICA DO TOOLTIP ---
    function showTooltip(button) {
        const key = button.dataset.tooltipKey;
        const content = translations[currentLang][key];
        if (!content) return;
        tooltipPopup.innerHTML = content;
        const rect = button.getBoundingClientRect();
        
        tooltipPopup.style.visibility = 'hidden';
        tooltipPopup.style.opacity = '0';
        tooltipPopup.style.display = 'block'; 
        const popupRect = tooltipPopup.getBoundingClientRect();
        tooltipPopup.style.display = ''; 
        
        let left = rect.right + window.scrollX + 10; 
        let top = rect.top + window.scrollY + (rect.height / 2) - (popupRect.height / 2);
        if (left + popupRect.width > (window.innerWidth - 10)) left = rect.left + window.scrollX - popupRect.width - 10; 
        if (top < window.scrollY + 10) top = window.scrollY + 10; 
        if (top + popupRect.height > (window.innerHeight + window.scrollY - 10)) top = window.innerHeight + window.scrollY - popupRect.height - 10; 

        tooltipPopup.style.top = `${top}px`;
        tooltipPopup.style.left = `${left}px`;
        tooltipPopup.style.visibility = 'visible';
        tooltipPopup.style.opacity = '1';
    }

    function hideTooltip() {
        tooltipPopup.style.opacity = '0';
        tooltipPopup.style.visibility = 'hidden';
    }
    
    // === FUNÇÕES DO PAINEL DE PRÊMIOS ===
    function renderAwards(awards) {
        if (!Array.isArray(awards) || awards.length === 0) {
            if (lastValidAwards.length === 0) {
                awardsListContainer.innerHTML = `<div class="empty">${translations[currentLang].awardsStatusNoAwards}</div>`;
                awardsStatusMessage.style.display = 'none';
            }
            return;
        }
        const awardsChanged = JSON.stringify(lastValidAwards) !== JSON.stringify(awards);
        if (!awardsChanged) return;

        lastValidAwards = [...awards];
        awardsListContainer.innerHTML = '';
        awardsStatusMessage.style.display = 'none';
        
        awards.forEach(award => {
            const card = document.createElement('div');
            card.className = 'award-card';
            card.dataset.awardName = award?.name || '—';
            const tag = document.createElement('div');
            tag.className = 'award-card__tag';
            card.appendChild(tag);
            const title = document.createElement('div');
            title.className = 'award-card__title';
            title.textContent = award?.name || '—';
            card.appendChild(title);
            awardsListContainer.appendChild(card);
        });
        awardsCount.textContent = awards.length;
    }

    async function fetchAwards() {
        const DV = awardsDvInput.value.trim();
        const API_KEY = awardsApiKeyInput.value.trim();
        if (!DV || !API_KEY) {
            awardsListContainer.innerHTML = `<div class="error">${translations[currentLang].awardsStatusError}</div>`;
            awardsStatusMessage.style.display = 'none';
            return;
        }
        if (isAwardsLoading) return;
        isAwardsLoading = true;
        awardsApiAttempts++;

        const apiUrl = `https://megamu.net/dvapi.php?dv=${encodeURIComponent(DV)}&key=${encodeURIComponent(API_KEY)}&action=getawards&_=${Date.now()}`;
        let url = apiUrl;
        if (awardsUsingProxy || awardsApiAttempts > 1) {
            url = `https://api.allorigins.win/get?url=${encodeURIComponent(apiUrl)}`;
            awardsUsingProxy = true;
        }
        if (lastValidAwards.length === 0) awardsListContainer.innerHTML = `<div class="empty">${translations[currentLang].awardsStatusLoading}</div>`;
        awardsStatusMessage.style.display = 'none';

        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            let data = await response.json();
            if (awardsUsingProxy && data.contents) data = JSON.parse(data.contents);

            if (data && (data.result === 1 || data.awards)) {
                renderAwards(data.awards || []);
                awardsCount.textContent = (data.awards || []).length;
            } else {
                if (lastValidAwards.length === 0) awardsListContainer.innerHTML = `<div class="empty">${translations[currentLang].awardsStatusNoAwards}</div>`;
                 awardsCount.textContent = lastValidAwards.length;
            }
        } catch (error) {
            console.error('Erro ao buscar prêmios:', error);
            if (awardsApiAttempts === 1 && !awardsUsingProxy) {
                awardsUsingProxy = true;
                isAwardsLoading = false;
                fetchAwards();
                return;
            }
            if (lastValidAwards.length === 0) awardsListContainer.innerHTML = `<div class="error">${translations[currentLang].awardsStatusApiError}</div>`;
        } finally {
            isAwardsLoading = false;
        }
    }

    function startAwardsMonitor() {
        awardsOverlayPanel.style.display = 'flex';
        awardsStatusMessage.style.display = 'block';
        awardsStatusMessage.textContent = translations[currentLang].awardsStatusLoading;
        awardsStatusMessage.className = 'status-waiting';
        lastValidAwards = [];
        awardsApiAttempts = 0;
        awardsUsingProxy = false;
        fetchAwards();
        if (awardsApiTimer) clearInterval(awardsApiTimer);
        awardsApiTimer = setInterval(() => {
            awardsApiAttempts = 0;
            fetchAwards();
        }, 3000);
    }

    function stopAwardsMonitor() {
        awardsOverlayPanel.style.display = 'none';
        awardsStatusMessage.style.display = 'none';
        if (awardsApiTimer) {
            clearInterval(awardsApiTimer);
            awardsApiTimer = null;
        }
        awardsListContainer.innerHTML = '';
        awardsCount.textContent = '0';
        lastValidAwards = [];
    }
    
    function sendAwardAnnouncement(awardName) {
        const messageTemplate = awardAnnounceMessageInput.value;
        if (!messageTemplate) return;
        const message = messageTemplate.replace('{award}', awardName);
        // Usa configs globais de anúncio para prêmios também
        const useAnnounce = twitchUseAnnouncementCheckbox.checked;
        const color = twitchAnnouncementColorSelect.value;
        sendTwitchMessage(message, useAnnounce, color);
        
        sendKickletMessage(message);
    }

    function handleLanguageChange(event) {
        const oldLang = currentLang;
        const newLang = event.target.value;
        currentLang = newLang;
        setLanguage(currentLang);
        
        // LISTA DE INPUTS E SUAS CHAVES PADRÃO
        const messageInputs = [
            { input: startMessageInput, defaultKey: 'defaultStartMessage' },
            { input: announcementMessageInput, defaultKey: 'defaultAnnounceMessage' },
            { input: kickStartMessageInput, defaultKey: 'defaultKickStartMessage' },
            { input: kickAnnounceMessageInput, defaultKey: 'defaultKickAnnounceMessage' },
            { input: twitchClosedMessageInput, defaultKey: 'defaultTwitchClosedMessage' },
            { input: kickClosedMessageInput, defaultKey: 'defaultKickClosedMessage' },
            { input: awardAnnounceMessageInput, defaultKey: 'defaultAwardAnnounceMessage' }
        ];

        messageInputs.forEach(item => {
            const currentVal = item.input.value;
            // Verifica se o valor atual é vazio OU se é igual ao padrão do idioma ANTERIOR
            // (ou seja, o usuário não customizou)
            const oldDefault = translations[oldLang][item.defaultKey];
            
            if (!currentVal || currentVal === oldDefault) {
                // Atualiza para o padrão do NOVO idioma
                item.input.value = translations[newLang][item.defaultKey];
            }
        });

        if (modalMessageInput) modalMessageInput.setAttribute('placeholder', translations[currentLang].modalMessagePlaceholder);
    }

    // --- INICIALIZAÇÃO E EVENTOS ---
    function init() {
        currentLang = getInitialLanguage();
        setLanguage(currentLang);
        
        languageSelectLogin.value = currentLang;
        languageSelectSettings.value = currentLang;

        loadSettings();
        participationSettingsWrapper.style.display = 'none';
        
        connectButton.addEventListener('click', handleConnect);
        startGiveawayButton.addEventListener('click', handleStartGiveaway);
        drawButton.addEventListener('click', drawWinner);
        resetButton.addEventListener('click', fullReset);
        pauseGiveawayButton.addEventListener('click', handlePauseGiveaway);
        
        changeChannelButton.addEventListener('click', () => {
            fullReset();
            showScreen('login');
        });
        
        headerMenuToggle.addEventListener('click', () => {
            headerMenuDropdown.classList.toggle('active');
        });
        
        const toggleHandler = (wrapper, openIcon, closedIcon) => (e) => {
             if (!e.target.closest('input[type="checkbox"]')) {
                const isHidden = wrapper.style.display === 'none';
                wrapper.style.display = isHidden ? 'flex' : 'none';
                openIcon.style.display = isHidden ? 'block' : 'none'; 
                closedIcon.style.display = isHidden ? 'none' : 'block'; 
            }
        };

        toggleTwitchBotPanel.addEventListener('click', toggleHandler(twitchBotSettingsWrapper, twitchEyeIconOpen, twitchEyeIconClosed));
        toggleKickBotPanel.addEventListener('click', toggleHandler(kickBotSettingsWrapper, kickEyeIconOpen, kickEyeIconClosed));
        toggleAwardsOverlayPanel.addEventListener('click', toggleHandler(awardsOverlaySettingsWrapper, awardsEyeIconOpen, awardsEyeIconClosed));
        toggleMultipliersPanel.addEventListener('click', toggleHandler(multipliersSettingsWrapper, multipliersEyeIconOpen, multipliersEyeIconClosed));
        toggleClosedMessagePanel.addEventListener('click', toggleHandler(closedMessageSettingsWrapper, eyeIconOpen, eyeIconClosed));
        toggleParticipationPanel.addEventListener('click', toggleHandler(participationSettingsWrapper, participationEyeIconOpen, participationEyeIconClosed));
        
        enableAwardsOverlayCheckbox.addEventListener('change', (e) => {
            if (e.target.checked) startAwardsMonitor();
            else stopAwardsMonitor();
        });
        
        // EVENTO PARA O ALERTA DE TOKEN (NAS CONFIGURAÇÕES)
        twitchUseAnnouncementCheckbox.addEventListener('change', (e) => {
            if (e.target.checked) {
                alert(translations[currentLang].announcementScopeWarning);
            }
        });
        
        awardsListContainer.addEventListener('click', (e) => {
            const card = e.target.closest('.award-card');
            if (card) {
                const awardName = card.dataset.awardName;
                if (awardName) {
                    currentAwardName = awardName;
                    sendAwardAnnouncement(awardName);
                }
            }
        });

        document.addEventListener('click', (e) => {
            if (!headerMenuToggle.contains(e.target) && !headerMenuDropdown.contains(e.target)) {
                headerMenuDropdown.classList.remove('active');
            }
            if (!tooltipPopup.contains(e.target) && !e.target.closest('.tooltip-trigger')) {
                hideTooltip();
            }
        });
        
        saveSettingsButton.addEventListener('click', () => {
            saveSettings();
            showAlert('alertSettingsSaved');
            if (enableAwardsOverlayCheckbox.checked) {
                stopAwardsMonitor();
                startAwardsMonitor();
            }
        });
        
        languageSelectLogin.addEventListener('change', handleLanguageChange);
        languageSelectSettings.addEventListener('change', handleLanguageChange);
        
        document.querySelectorAll('.tooltip-trigger').forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                if (tooltipPopup.style.visibility === 'visible' && tooltipPopup.dataset.currentKey === e.currentTarget.dataset.tooltipKey) {
                    tooltipPopup.dataset.currentKey = '';
                    hideTooltip();
                } else {
                    hideTooltip();
                    showTooltip(e.currentTarget);
                    tooltipPopup.dataset.currentKey = e.currentTarget.dataset.tooltipKey;
                }
            });
        });

        participantList.addEventListener('click', (e) => {
            const li = e.target.closest('li[data-unique-id]');
            if (!li) return;
            if (!isGiveawayRunning && !pauseGiveawayButton.classList.contains('paused')) return; 
            const uniqueId = li.dataset.uniqueId;
            toggleParticipantDisqualification(uniqueId);
        });
    }

    init();
});