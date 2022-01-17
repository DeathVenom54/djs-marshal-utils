import { ColorResolvable, EmojiResolvable, MessageEmbed } from 'discord.js';

/**
 * Makes a simple embed with a title and description
 * @param {string} title The title of the embed
 * @param {ColorResolvable} color The color of the embed (default: blue)
 * @param { description?: string; emoji?: EmojiResolvable } options Extra options like description and emoji
 *
 * @return {MessageEmbed} The created embed
 */
export const simpleEmbed = (
  title: string,
  color: ColorResolvable = 'BLUE',
  options?: { description?: string; emoji?: EmojiResolvable },
): MessageEmbed => {
  return new MessageEmbed({
    title: options?.emoji ? `${options.emoji} ${title}` : title,
    color,
    description: options?.description,
  });
};
