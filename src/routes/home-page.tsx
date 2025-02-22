import { Sparkles } from "lucide-react";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { MarqueImg } from "@/components/marquee-img";
import { Link } from "react-router-dom";

// Animation variants
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } }
};

const slideUp = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6 } }
};

export const HomePage = () => {
  return (
    <div className="flex-col w-full pb-24 bg-gradient-to-b from-slate-50 to-indigo-50">
      <Container>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="my-8 space-y-6"
        >
          <h1 className="text-4xl text-center md:text-left md:text-7xl font-bold bg-gradient-to-r from-indigo-600 to-teal-500 bg-clip-text text-transparent">
            <motion.span variants={slideUp} className="block">
              AI-Powered Interview Mastery
            </motion.span>
            <motion.span
              variants={slideUp}
              className="text-2xl md:text-4xl font-medium text-slate-600 mt-4 block"
            >
              Transform Your Career Prospects
            </motion.span>
          </h1>

          <motion.p
            variants={slideUp}
            className="mt-4 text-slate-500 text-lg max-w-3xl leading-relaxed"
          >
            Leverage cutting-edge AI technology to analyze, practice, and perfect 
            your interview skills with real-time feedback and personalized coaching.
          </motion.p>
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          className="grid grid-cols-2 md:flex md:justify-between gap-8 py-12 border-y border-slate-200"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: { staggerChildren: 0.2 }
            }
          }}
        >
          {[
            { value: "250K+", label: "Career Milestones Achieved" },
            { value: "98%", label: "Success Rate Improvement" },
            { value: "1.2M+", label: "Interviews Mastered" },
            { value: "4.9/5", label: "User Satisfaction Score" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              variants={slideUp}
              className="text-center group hover:scale-105 transition-transform"
            >
              <p className="text-4xl font-bold text-indigo-600 group-hover:text-indigo-700 transition-colors">
                {stat.value}
              </p>
              <p className="mt-2 text-slate-500 text-lg">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Hero Section */}
        <motion.div 
          className="mt-16 rounded-2xl bg-gradient-to-r from-indigo-500 to-teal-500 p-1 shadow-xl"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative rounded-xl overflow-hidden h-[500px]">
            <img
              src="/img/hero.jpg"
              alt="AI Interview Coaching"
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
            />
            
            <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-lg">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                <div>
                  <h3 className="text-2xl font-bold text-slate-800">
                    Real-time AI Analysis
                  </h3>
                  <p className="text-slate-600 mt-2 max-w-xl">
                    Get instant feedback on your responses, body language, 
                    and communication patterns with our advanced AI models.
                  </p>
                </div>
                <Button 
                  className="mt-4 md:mt-0 bg-indigo-600 hover:bg-indigo-700 px-8 py-6 text-lg rounded-xl transition-all hover:shadow-lg"
                  asChild
                >
                  <Link to="/generate">
                    <Sparkles className="mr-2 h-5 w-5" />
                    Start Free Trial
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>

      {/* Marquee Section */}
      <div className="py-16 bg-gradient-to-r from-indigo-50 to-teal-50 my-24">
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white z-10" />
          <Marquee speed={40} pauseOnHover gradient={false}>
            {["firebase", "meet", "zoom", "microsoft", "tailwindcss"].map((logo) => (
              <div className="mx-8 opacity-80 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
              <MarqueImg key={logo} img={`/img/logo/${logo}.png`} />
            </div>
            
            ))}
          </Marquee>
        </div>
      </div>

      {/* Value Proposition Section */}
      <Container>
        <motion.div 
          className="grid md:grid-cols-2 gap-16 items-center"
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.2 } }
          }}
        >
          <motion.div variants={slideUp} className="relative">
            <div className="absolute -inset-8 bg-indigo-100 rounded-3xl transform rotate-2" />
            <img
              src="/img/office.jpg"
              alt="Interview Preparation"
              className="relative z-10 rounded-3xl shadow-xl transform hover:rotate-1 transition-transform duration-500"
            />
          </motion.div>
          
          <motion.div variants={slideUp} className="space-y-8">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
              Transformative Learning Experience
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Our adaptive learning platform combines AI-powered simulations with 
              human expertise to create a personalized development path that 
              evolves with your progress.
            </p>
            <ul className="space-y-4">
              {[
                "Real-time performance analytics",
                "Personalized coaching plans",
                "Industry-specific scenarios",
                "Multi-round interview simulations"
              ].map((feature, index) => (
                <li 
                  key={index}
                  className="flex items-center text-slate-700 hover:text-indigo-600 transition-colors"
                >
                  <Sparkles className="h-5 w-5 mr-3 text-teal-500" />
                  {feature}
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* CTA Section */}
        <div className="mt-24 bg-indigo-600 rounded-3xl p-1 shadow-2xl">
          <div className="bg-white rounded-2xl p-12 text-center relative overflow-hidden">
            <div className="absolute -top-16 -right-16 w-32 h-32 bg-teal-400 rounded-full opacity-20" />
            <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-indigo-400 rounded-full opacity-20" />
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-slate-800">
                Ready to Revolutionize Your Interview Skills?
              </h2>
              <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                Join thousands of professionals who've accelerated their career 
                growth with our AI-powered platform.
              </p>
              <Button
                className="mx-auto bg-indigo-600 hover:bg-indigo-700 px-10 py-7 text-lg rounded-xl hover:shadow-lg transition-all"
                asChild
              >
                <Link to="/generate">
                  <Sparkles className="mr-3 h-6 w-6" />
                  Start Your Free Assessment
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </Container>
    </div>
  );
};