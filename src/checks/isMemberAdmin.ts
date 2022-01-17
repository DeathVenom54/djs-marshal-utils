import { BaseCommandInteraction } from 'discord.js';

/**
 * Checks if the member who triggered the interaction is an admin
 * @param {BaseCommandInteraction} interaction The interaction to check
 *
 * @return {boolean} Whether the member is an admin
 *
 * @remark This checks if the member has the ADMINISTRATOR permission
 */
export const isMemberAdmin = (interaction: BaseCommandInteraction): boolean => {
  return !!interaction.memberPermissions?.has('ADMINISTRATOR');
};
