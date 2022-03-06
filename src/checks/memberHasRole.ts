import { BaseCommandInteraction } from 'discord.js';
import is_number from 'is-number';

/**
 * Checks if a member of an interaction has a role, by id or name
 * @param {BaseCommandInteraction} int The interaction to check
 * @param {string} role The role name or id
 * @param {boolean} exactCase Whether the role name should have the exact case/capitalization (default: false)
 *
 * @return {boolean} Whether the member has the role
 */
export const memberHasRole = async (
  int: BaseCommandInteraction,
  role: string,
  exactCase: boolean = false,
): Promise<boolean> => {
  const isId = role.length === 18 && is_number(role);

  const member = await int.guild?.members.fetch(int.user.id);
  if (isId) {
    return !!member?.roles.cache.has(role);
  } else {
    if (exactCase) {
      return !!member?.roles.cache.find((r) => r.name === role);
    } else {
      return !!member?.roles.cache.find((r) => r.name.toLowerCase() === role.toLowerCase());
    }
  }
};
