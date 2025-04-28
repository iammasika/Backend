import {createNotification,getAllNotifications} from '../src/Services/notificationService'

const notification=async ()=> {
return createNotification({
    id: '',
    userId: '',
    type: 'VOTE_UPDATE',
    message: '',
    read: false,
    createdAt: new Date,
})
}