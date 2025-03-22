import { LOADING_CONFIG, THEME } from '../constants/constant';

const LoadingScreen = () => {
    return (
        <div className="fixed inset-0 bg-[#0a0a0a] flex items-center justify-center z-50">
            <div className="relative">
                {/* Main spinning circle */}
                <div className="w-24 h-24 rounded-full border-4 border-gray-800 border-t-gray-400 animate-spin-slow"></div>

                {/* Inner spinning element */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full border-4 border-gray-800 border-b-gray-400 animate-spin-slow"></div>
                </div>

                {/* Center dot */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-4 h-4 bg-gray-400 rounded-full animate-pulse-slow"></div>
                </div>

                {/* Decorative floating dots */}
                <div className="absolute -top-8 -left-8 w-4 h-4 bg-blue-400/30 rounded-full animate-float-slow blur-sm"></div>
                <div className="absolute -bottom-8 -right-8 w-4 h-4 bg-purple-400/30 rounded-full animate-float-slow-reverse blur-sm"></div>

                {/* Loading text */}
                <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 flex items-center gap-1">
                    <span className="text-gray-400 text-sm">Loading</span>
                    <span className="flex gap-1">
                        {[0, 1, 2].map((i) => (
                            <span
                                key={i}
                                className="w-1 h-1 bg-gray-400 rounded-full animate-bounce-slow"
                                style={{ animationDelay: `${i * 0.2}s` }}
                            ></span>
                        ))}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default LoadingScreen; 