import { motion } from 'framer-motion';
import type { TeamMember as TeamMemberType } from '../../types/team';

interface TeamMemberProps {
  member: TeamMemberType;
  delay: number;
}

export function TeamMember({ member, delay }: TeamMemberProps) {
  const Icon = member.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 hover:bg-gray-800/70 transition-colors"
    >
      <motion.div
        className="aspect-square mb-4 overflow-hidden rounded-lg"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.5 }}
      >
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover"
        />
      </motion.div>
      <div className="text-center">
        <div className="flex items-center justify-center gap-2 mb-1">
          <h3 className="text-xl font-bold text-white">{member.name}</h3>
          {Icon && <Icon className="w-4 h-4 text-blue-400" />}
        </div>
        <p className="text-blue-400 font-medium text-sm mb-2">{member.role}</p>
        <p className="text-gray-400 text-sm line-clamp-3">{member.bio}</p>
      </div>
    </motion.div>
  );
}
