import { BaseCommandInteraction, EmojiResolvable } from 'discord.js';
import { successEmbed } from '../embeds';

/**
 * Replies to an interaction with a success embed
 * @param {BaseCommandInteraction} interaction The interaction to reply to
 * @param {string} message The success message to display
 * @param {string} details Optional details to include in the message
 * @param {EmojiResolvable} emoji Emoji to include in the title
 */
export const replyWithSuccess = async (
  interaction: BaseCommandInteraction,
  message: string,
  details?: string,
  emoji?: EmojiResolvable,
): Promise<void> => {
  const embed = successEmbed(message, details, emoji);

  if (interaction.deferred || interaction.replied) {
    await interaction.editReply({
      embeds: [embed],
    });
  } else {
    await interaction.reply({
      embeds: [embed],
    });
  }
};
