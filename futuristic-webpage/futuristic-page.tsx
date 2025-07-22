"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Zap, Brain, Rocket, Shield, Eye, Cpu, Wifi, Globe, ChevronRight, Play, Pause, Volume2 } from "lucide-react"

export default function Component() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const futuristicTech = [
    {
      icon: Brain,
      title: "Neural Interface",
      description: "Direct brain-computer connection for seamless digital interaction",
      status: "ACTIVE",
      progress: 87,
    },
    {
      icon: Rocket,
      title: "Quantum Propulsion",
      description: "Revolutionary space travel technology reaching 0.3c velocity",
      status: "TESTING",
      progress: 64,
    },
    {
      icon: Shield,
      title: "Plasma Shield",
      description: "Advanced defensive matrix protecting against all known threats",
      status: "ONLINE",
      progress: 95,
    },
    {
      icon: Eye,
      title: "Holographic Display",
      description: "3D volumetric projection system with tactile feedback",
      status: "DEPLOYED",
      progress: 78,
    },
    {
      icon: Cpu,
      title: "Quantum Processor",
      description: "1000-qubit quantum computing core with error correction",
      status: "OPERATIONAL",
      progress: 92,
    },
    {
      icon: Wifi,
      title: "Neural Network",
      description: "Global consciousness grid connecting all enhanced humans",
      status: "EXPANDING",
      progress: 56,
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Animated Background Grid */}
      <div className="fixed inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
          `,
            backgroundSize: "50px 50px",
            animation: "grid-move 20s linear infinite",
          }}
        />
      </div>

      {/* Floating Particles */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Header */}
      <header className="relative z-10 p-6 border-b border-cyan-500/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
              <Zap className="w-6 h-6 text-black" />
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                NEXUS CORP
              </h1>
              <p className="text-xs text-cyan-400">FUTURE TECHNOLOGIES</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-cyan-400 hover:text-white transition-colors">
              SYSTEMS
            </a>
            <a href="#" className="text-cyan-400 hover:text-white transition-colors">
              RESEARCH
            </a>
            <a href="#" className="text-cyan-400 hover:text-white transition-colors">
              CONTACT
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <div className="text-right">
              <div className="text-xs text-cyan-400">SYSTEM TIME</div>
              <div className="text-sm font-mono">{currentTime.toLocaleTimeString()}</div>
            </div>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <Badge className="mb-6 bg-cyan-500/20 text-cyan-400 border-cyan-500/50 hover:bg-cyan-500/30">
            CLASSIFIED PROJECT OMEGA
          </Badge>

          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            THE FUTURE
            <br />
            IS NOW
          </h1>

          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Experience the next evolution of human technology. Our advanced systems integrate seamlessly with biological
            processes to unlock unlimited potential.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white border-0 px-8 py-3 text-lg group"
            >
              INITIALIZE SEQUENCE
              <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 px-8 py-3 text-lg group bg-transparent"
              onClick={() => setIsPlaying(!isPlaying)}
            >
              {isPlaying ? <Pause className="mr-2 w-5 h-5" /> : <Play className="mr-2 w-5 h-5" />}
              NEURAL BRIEFING
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { label: "ACTIVE SYSTEMS", value: "2,847" },
              { label: "NEURAL LINKS", value: "156K" },
              { label: "QUANTUM CORES", value: "42" },
              { label: "UPTIME", value: "99.9%" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Grid */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              ACTIVE TECHNOLOGIES
            </h2>
            <p className="text-gray-400 text-lg">Real-time status of our most advanced systems</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {futuristicTech.map((tech, i) => (
              <Card
                key={i}
                className="bg-black/50 border-cyan-500/30 backdrop-blur-sm hover:border-cyan-400/60 transition-all duration-300 group hover:scale-105"
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center group-hover:from-cyan-500/30 group-hover:to-purple-500/30 transition-all">
                      <tech.icon className="w-6 h-6 text-cyan-400" />
                    </div>
                    <Badge
                      variant="outline"
                      className={`text-xs ${
                        tech.status === "ACTIVE" ||
                        tech.status === "ONLINE" ||
                        tech.status === "OPERATIONAL" ||
                        tech.status === "DEPLOYED"
                          ? "border-green-500 text-green-400"
                          : tech.status === "TESTING"
                            ? "border-yellow-500 text-yellow-400"
                            : "border-blue-500 text-blue-400"
                      }`}
                    >
                      {tech.status}
                    </Badge>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">{tech.title}</h3>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">{tech.description}</p>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">EFFICIENCY</span>
                      <span className="text-cyan-400">{tech.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-cyan-500 to-purple-500 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${tech.progress}%` }}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Command Center */}
      <section className="relative z-10 py-20 px-6 bg-gradient-to-r from-cyan-900/10 to-purple-900/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              COMMAND CENTER
            </h2>
            <p className="text-gray-400 text-lg">Central hub for all system operations</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* System Monitor */}
            <Card className="bg-black/50 border-cyan-500/30 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                  <Globe className="w-6 h-6 text-cyan-400 mr-3" />
                  GLOBAL NETWORK STATUS
                </h3>

                <div className="space-y-4">
                  {[
                    { region: "NORTH AMERICA", status: "OPTIMAL", latency: "12ms" },
                    { region: "EUROPE", status: "OPTIMAL", latency: "8ms" },
                    { region: "ASIA PACIFIC", status: "DEGRADED", latency: "45ms" },
                    { region: "MARS COLONY", status: "CONNECTING", latency: "2.4s" },
                  ].map((region, i) => (
                    <div key={i} className="flex items-center justify-between p-3 bg-gray-900/50 rounded-lg">
                      <div>
                        <div className="text-white font-medium">{region.region}</div>
                        <div className="text-sm text-gray-400">Latency: {region.latency}</div>
                      </div>
                      <Badge
                        variant="outline"
                        className={`${
                          region.status === "OPTIMAL"
                            ? "border-green-500 text-green-400"
                            : region.status === "DEGRADED"
                              ? "border-yellow-500 text-yellow-400"
                              : "border-blue-500 text-blue-400"
                        }`}
                      >
                        {region.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Audio Control */}
            <Card className="bg-black/50 border-cyan-500/30 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                  <Volume2 className="w-6 h-6 text-cyan-400 mr-3" />
                  NEURAL AUDIO INTERFACE
                </h3>

                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">AMBIENT FREQUENCY</span>
                    <span className="text-cyan-400">432 Hz</span>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">NEURAL SYNC</span>
                      <span className="text-cyan-400">78%</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2">
                      <div className="bg-gradient-to-r from-cyan-500 to-purple-500 h-2 rounded-full w-3/4" />
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    {["ALPHA", "BETA", "GAMMA"].map((wave, i) => (
                      <Button
                        key={i}
                        variant="outline"
                        size="sm"
                        className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 bg-transparent"
                      >
                        {wave}
                      </Button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-cyan-500/30 py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-4">
              NEXUS CORP
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Pioneering the future of human-machine integration. Our technologies bridge the gap between biological and
              digital consciousness.
            </p>
          </div>

          <div className="flex justify-center space-x-8 mb-8">
            <a href="#" className="text-cyan-400 hover:text-white transition-colors">
              RESEARCH
            </a>
            <a href="#" className="text-cyan-400 hover:text-white transition-colors">
              CAREERS
            </a>
            <a href="#" className="text-cyan-400 hover:text-white transition-colors">
              CONTACT
            </a>
            <a href="#" className="text-cyan-400 hover:text-white transition-colors">
              PRIVACY
            </a>
          </div>

          <div className="text-sm text-gray-500">© 2087 NEXUS CORP. ALL RIGHTS RESERVED. | CLASSIFIED LEVEL OMEGA</div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes grid-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
      `}</style>
    </div>
  )
}
