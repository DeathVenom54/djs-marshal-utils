import { BaseCommandInteraction, EmojiResolvable } from 'discord.js';
import { errorEmbed } from '../embeds';

/**
 * Replies to an interaction with an error embed
 * @param {BaseCommandInteraction} interaction The interaction to reply to
 * @param {string} errorMessage The error message to send
 * @param {boolean} ephemeral Whether to make reply ephemeral
 * @param {string} details Optional details to include in the message
 * @param {EmojiResolvable} emoji Emoji to include in the title
 */
export const replyWithError = async (
  interaction: BaseCommandInteraction,
  errorMessage: string,
  ephemeral: boolean,
  details?: string,
  emoji?: EmojiResolvable,
): Promise<void> => {
  const embed = errorEmbed(errorMessage, details, emoji);

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
