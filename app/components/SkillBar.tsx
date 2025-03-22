'use client';

interface SkillBarProps {
    name: string;
    percentage: number;
}

const SkillBar = ({ name, percentage }: SkillBarProps) => {
    return (
        <div className="mb-6 group">
            <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">{name}</span>
                <span className="text-sm text-gray-500 group-hover:text-gray-400 transition-colors">{percentage}%</span>
            </div>
            <div className="skill-bar group-hover:bg-[#2a2b2e] transition-colors">
                <div
                    className="skill-progress group-hover:shadow-lg"
                    style={{ width: `${percentage}%` }}
                />
            </div>
        </div>
    );
};

export default SkillBar; 