import Foto from '@/assets/image.png'
import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex flex-col place-items-center">
      <h1>Natalie Sihombing</h1>
      <div>
        <section>
          <h2>Service</h2>
          <div>
            <div>
              <p>Web Development</p>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div>
            <div>
              <p>UI/UX Desing </p>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div>
            <div>
              <p>Web Consulting</p>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </section>
        <Image src={Foto} alt='foto' />
        <section>
          <h2>Web Specialist based in Jakarta</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
          <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <span>
            <a>Hire me</a>
          </span>
          <div className='flex '>
            <p className='flex flex-col'><strong>13 Years</strong>Experience</p>
            <p className='flex flex-col'><strong>256+</strong>Clients</p>
            <p className='flex flex-col'><strong>99.8%</strong>Satisfaction</p>
          </div>
        </section>
      </div>
      
    </main>
  );
}
