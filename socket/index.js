const { addUser, removeUser, users,
    getUser} = require("./User");
const io = require('socket.io')(8900,{
    cors:{
        origin: 'http://localhost:3000'
    }
})

let rooms = []

/* const addUser = (userName, socketId, gameSessionId) => {
    gameSessions = {
        ...gameSessions,
        [gameSessionId]: {
            ...gameSessions.gameSessionId,
            users : [...gameSessions[gameSessionId].users, {userName, socketId}]
        }
    }
} */

io.on('connection', (socket)=>{
    console.log('a user connected')

    socket.on('join', ({name,room, players })=>{
        const { error, user } = addUser(
            { id: socket.id, name, room });
        if (error) return callback(error);
        const existingRoom = rooms.find(item => item.id === room)
        console.log(existingRoom)
        if(!existingRoom) {
            rooms.push({
                id: room,
                maxPlayers: players,
                players: [name]
            })
        } else{
            rooms = rooms.map(item =>{
                if(item.id === room){
                    return {
                        ...item,
                        players: [ ...item.players,name]
                    }
                }
                return item
            })
        }

        // Emit will send message to the user
        // who had joined
        socket.emit('message', { user: 'admin', text: `welcome to room ${room}.`, room: rooms.find(item=>item.id === room)});
 
        // Broadcast will send message to everyone
        // in the room except the joined user
        socket.broadcast.to(user.room)
            .emit('message', { text: `${name}, has joined`, room: rooms.find(item=>item.id === room) });
 
        socket.join(room);

        io.to(room).emit('roomData', {
            room: rooms.find(item=>item.id === room),
        });
    })

   socket.on('requestRoomData',(session)=>{
       console.log('BALIFF',session, rooms)
       io.to(session).emit('roomData', {
           room: rooms.find(item=>item.id === session),
       });
   })

    socket.on('send_message', data =>{
        console.log(data.room, data.message)
        socket.broadcast.to(data.room).emit('receive_message', data.message)
    })

    socket.on('numberOfPlayers',(data)=>{
          numberOfPlayers = data.quantity
          gameSessions[data.gameSessionId] = {
              numberOfPlayers : data.quantity,
              users: []
          }
          console.log(gameSessions)
          io.emit('getNumberOfPlayers', data.quantity)
      })

    socket.on('addUser', ({userName, gameSessionId})=>{
        addUser(userName, socket.id, gameSessionId)
        io.emit("getUsers", gameSessions[gameSessionId].users)
    })

    socket.on('requestUsers', (gameSessionId)=>{
        io.emit("getUsers", gameSessions[gameSessionId].users)
    })

    socket.on('requestNumberOfPlayers', ()=>{
        io.emit("getNumberOfPlayers", numberOfPlayers)
        
    })

    socket.on('joiningSession', ({gameSessionId})=>{
        io.emit("getSession", gameSessionId)
    })

    socket.on('disconnect', () => {
        const user = removeUser(socket.id);
        if (user) {
            io.to(user.room).emit('message',
            { user: 'admin', text:
            `${user.name} had left` });
        }
    })

/*     socket.on('disconnect', ()=>{
        console.log('A user has disconnected')
        removeUser(socket.id)
        io.emit("getUsers", users)
    }) */
})


/* const removeUser = (socketId) =>{
    users = users.filter(user=> user.socketId !== socketId)
}
 */