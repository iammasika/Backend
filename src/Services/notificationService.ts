// import the prisma client from the prisma.ts file
import prisma from "../../lib/prisma";
import type {  Prisma , Notification, NotificationType} from "@prisma/client";

// create a function to create a new notification
type NotificationInput = Prisma.NotificationCreateInput;

// create a function to create a new notification
export const createNotification = async (data: Notification) => {
    try {
        const notification = await prisma.notification.create({
            data: data,
        });
        return notification;
    } catch (error) {
        throw new Error("Error creating notification");
    }
};

// create a function to get all notifications
export const getAllNotifications = async () => {
    try {
        const notifications = await prisma.notification.findMany();
        return notifications;
    } catch (error) {
        throw new Error("Error getting notifications");
    }
};

