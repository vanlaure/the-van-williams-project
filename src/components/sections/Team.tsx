import { Users } from 'lucide-react';
import { motion } from 'framer-motion';
import { TeamMember } from '../team/TeamMember';
import { teamMembers } from '../../data/team';

export default function Team() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 via-gray-900 to-black py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <Users className="w-12 h-12 text-blue-400 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-white mb-4">
            Meet Our Team
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            The innovators and visionaries behind the Van Williams Project
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {teamMembers.map((member, index) => (
            <TeamMember
              key={member.name}
              member={member}
              delay={index * 0.2}
            />
          ))}
        </div>
      </div>
    </div>
  );
}