import { simpleEmbed } from './simpleEmbed';
import { EmojiResolvable, MessageEmbed } from 'discord.js';

/**
 * Makes an embed for reporting an error
 * @param {string} errorMessage The error message to display
 * @param {string} details Optional details to include in the message
 * @param {EmojiResolvable} emoji Emoji to include in the title
 *
 * @return {MessageEmbed} The created embed
 */
export const errorEmbed = (errorMessage: string, details?: string, emoji?: EmojiResolvable): MessageEmbed => {
  return simpleEmbed(errorMessage, 'RED', { description: details, emoji });
};
