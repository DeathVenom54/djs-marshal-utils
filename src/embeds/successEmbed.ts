import { EmojiResolvable, MessageEmbed } from 'discord.js';
import { simpleEmbed } from './simpleEmbed';

/**
 * Makes an embed for sending a success message
 * @param {string} message The success message to display
 * @param {string} details Optional details to include in the message
 * @param {EmojiResolvable} emoji Emoji to include in the title
 *
 * @return {MessageEmbed} The created embed
 */
export const successEmbed = (message: string, details?: string, emoji?: EmojiResolvable): MessageEmbed => {
  return simpleEmbed(message, 'RED', { description: details, emoji });
};
