import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useTypingAnimation } from '@/hooks/useTypingAnimation';
import { HiDocumentDownload, HiEye } from 'react-icons/hi';
import { FaGithub, FaLinkedin, FaAndroid, FaNodeJs, FaDatabase } from 'react-icons/fa';
import { SiKotlin } from 'react-icons/si';
import { GradientText } from '@/components/ui/GradientText';

const words = ['Android Developer', 'Backend Engineer', 'Problem Solver', 'System Designer'];

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const typedText = useTypingAnimation(words, 80, 40, 2000);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

const gl = (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')) as WebGLRenderingContext | null;
    if (!gl) return;

    const resizeCanvas = () => {
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
      gl.viewport(0, 0, canvas.width, canvas.height);
    };

    const observer = new ResizeObserver(resizeCanvas);
    observer.observe(canvas);
    resizeCanvas();

    const vs = `attribute vec2 a_position;
varying vec2 v_texCoord;
void main() {
  v_texCoord = a_position * 0.5 + 0.5;
  gl_Position = vec4(a_position, 0.0, 1.0);
}`;

    const fs = `precision highp float;
uniform float u_time;
uniform vec2 u_resolution;
varying vec2 v_texCoord;

void main() {
    vec2 uv = v_texCoord;
    vec3 color1 = vec3(0.059, 0.086, 0.165); // #0F172A
    vec3 color2 = vec3(0.145, 0.388, 0.922);  // #2563EB
    vec3 color3 = vec3(0.486, 0.227, 0.929); // #7C3AED
    
    float noise = sin(uv.x * 3.0 + u_time * 0.3) * cos(uv.y * 3.0 - u_time * 0.3);
    noise += sin(uv.y * 5.0 + u_time * 0.5) * cos(uv.x * 2.0 + u_time * 0.2);
    
    vec3 finalColor = mix(color1, color2, 0.08 + 0.08 * noise);
    finalColor = mix(finalColor, color3, 0.04 * sin(u_time * 0.15 + uv.x * 3.0));
    
    gl_FragColor = vec4(finalColor, 1.0);
}`;

    const createShader = (type: number, source: string) => {
      const shader = gl.createShader(type)!;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      return shader;
    };

    const program = gl.createProgram()!;
    gl.attachShader(program, createShader(gl.VERTEX_SHADER, vs));
    gl.attachShader(program, createShader(gl.FRAGMENT_SHADER, fs));
    gl.linkProgram(program);
    gl.useProgram(program);

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);

    const pos = gl.getAttribLocation(program, 'a_position');
    gl.enableVertexAttribArray(pos);
    gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0);

    const uTime = gl.getUniformLocation(program, 'u_time');
    const uRes = gl.getUniformLocation(program, 'u_resolution');

    let mouseX = canvas.width / 2;
    let mouseY = canvas.height / 2;

    window.addEventListener('mousemove', (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = (e.clientX - rect.left) / rect.width * canvas.width;
      mouseY = (1 - (e.clientY - rect.top) / rect.height) * canvas.height;
    });

    const render = (time: number) => {
      resizeCanvas();
      gl.uniform1f(uTime, time * 0.001);
      gl.uniform2f(uRes, canvas.width, canvas.height);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      requestAnimationFrame(render);
    };
    requestAnimationFrame(render);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* WebGL Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-40"
        style={{ display: 'block' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <span className="inline-block px-4 py-2 glass-card rounded-full text-primary font-label text-xs uppercase tracking-widest">
                Available for Opportunities
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="font-display text-display-md lg:text-display leading-tight"
            >
              Pratik Suresh{' '}
              <GradientText as="span">Farate</GradientText>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="h-12 flex items-center"
            >
              <span className="font-display text-heading-lg text-on-surface-variant">
                {typedText}
                <span className="animate-pulse ml-0.5 text-primary">|</span>
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-on-surface-variant font-body text-body-lg max-w-lg leading-relaxed"
            >
              Building scalable Android applications and robust backend systems using Kotlin, 
              Jetpack Compose, Node.js, Express.js, and MongoDB. Passionate about creating 
              products that solve real-world problems.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <a
                href="/#projects"
                className="bg-primary text-on-primary font-label text-sm px-8 py-4 rounded-full hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] transition-all duration-300 inline-flex items-center gap-2"
              >
                <HiEye className="w-5 h-5" />
                View Projects
              </a>
              <a
                href="/pratik-suresh-farate.pdf"
                download="Pratik-Suresh-Farate-Resume.pdf"
                className="glass-card font-label text-sm px-8 py-4 rounded-full inline-flex items-center gap-2 hover:bg-white/[0.08] transition-all"
              >
                <HiDocumentDownload className="w-5 h-5" />
                Download Resume
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="flex gap-4 pt-2"
            >
              <a
                href="https://github.com/pratttikkKk"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass-card rounded-xl hover:text-primary transition-all"
                aria-label="GitHub Profile"
              >
                <FaGithub className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/pratik-farate-36bab1299"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass-card rounded-xl hover:text-primary transition-all"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin className="w-6 h-6" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right - Profile Image & Floating Icons */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="relative flex justify-center items-center"
          >
            <div className="absolute inset-0 bg-primary/10 blur-[120px] rounded-full" />
            
            <div className="relative z-10">
              {/* Profile Image */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="w-72 h-72 md:w-96 md:h-96 rounded-3xl overflow-hidden glass-card p-2"
              >
                <img
                  src="/ProfilePic.jpeg"
                  alt="Pratik Suresh Farate"
                  className="w-full h-full object-cover rounded-2xl"
                  width={384}
                  height={384}
                />
              </motion.div>

              {/* Floating Tech Icons */}
              <motion.div
                animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-6 -left-6 glass-card p-4 rounded-2xl"
              >
                <FaAndroid className="text-primary text-3xl" />
              </motion.div>

              <motion.div
                animate={{ y: [0, -12, 0], rotate: [0, -5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -bottom-6 -right-6 glass-card p-4 rounded-2xl"
              >
                <FaNodeJs className="text-secondary text-3xl" />
              </motion.div>

              <motion.div
                animate={{ y: [0, -8, 0], scale: [1, 1.1, 1] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute top-1/2 -right-12 glass-card p-3 rounded-2xl"
              >
                <FaDatabase className="text-accent text-2xl" />
              </motion.div>

              <motion.div
                animate={{ y: [0, -14, 0], rotate: [0, 8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
                className="absolute top-1/4 -left-12 glass-card p-3 rounded-2xl"
              >
                <SiKotlin className="text-accent text-2xl" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

