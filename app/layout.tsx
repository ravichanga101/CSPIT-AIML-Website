import type { Metadata } from 'next';
import './globals.css';
import { config } from '@/lib/config';
import MainMenu from '@/components/MainMenu';
import Footer from '@/components/Footer';
import Script from 'next/script';

export const metadata: Metadata = {
  title: `CSPIT - ${config.name_of_dept}`,
  description: config.mission.replace(/<[^>]*>?/gm, ''), // Strip HTML tags for description
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-dark-surface">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Favicons */}
        <link href="/img/favicon.png" rel="icon" />
        <link href="/img/apple-touch-icon.png" rel="apple-touch-icon" />

        {/* Google Fonts */}
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,700,700i|Raleway:300,400,500,700,800|Montserrat:300,400,700" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Noto+Serif" rel="stylesheet" />

        {/* Global CSS from php include/header.php */}
        <link href="/lib/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
        <link href="/lib/font-awesome/css/font-awesome.min.css" rel="stylesheet" />
        <link href="/lib/animate/animate.min.css" rel="stylesheet" />
        <link href="/lib/ionicons/css/ionicons.min.css" rel="stylesheet" />
        <link href="/lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet" />
        <link href="/lib/magnific-popup/magnific-popup.css" rel="stylesheet" />
        <link href="/css/style.css" rel="stylesheet" />
        <link href="/css/design.css" rel="stylesheet" />
      </head>
      <body id="body">
        <MainMenu />
        {children}
        <Footer />

        {/* Scripts from php include/footer.php */}
        {/* Using beforeInteractive for jQuery as it might be needed early? No, PHP puts them in footer. 
            So we use default strategy (afterInteractive) or 'lazyOnload'. 
            However, 'main.js' and others likely depend on jQuery. 
            So we load jQuery first.
        */}
        <Script src="/lib/jquery/jquery.min.js" strategy="beforeInteractive" />
        <Script src="/lib/jquery/jquery-migrate.min.js" strategy="beforeInteractive" />
        <Script src="/lib/bootstrap/js/bootstrap.bundle.min.js" strategy="afterInteractive" />
        <Script src="/lib/easing/easing.min.js" strategy="afterInteractive" />
        <Script src="/lib/superfish/hoverIntent.js" strategy="afterInteractive" />
        <Script src="/lib/superfish/superfish.min.js" strategy="afterInteractive" />
        <Script src="/lib/wow/wow.min.js" strategy="afterInteractive" />
        <Script src="/lib/owlcarousel/owl.carousel.min.js" strategy="afterInteractive" />
        <Script src="/lib/magnific-popup/magnific-popup.min.js" strategy="afterInteractive" />
        <Script src="/lib/sticky/sticky.js" strategy="afterInteractive" />
        <Script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyD8HeI8o-c1NppZA-92oYlXakhDPYR7XMY" strategy="afterInteractive" />
        <Script src="/contactform/contactform.js" strategy="afterInteractive" />
        <Script src="/lib/jquery/jquery.dataTables.min.js" strategy="afterInteractive" />
        <Script src="/lib/bootstrap/js/dataTables.bootstrap.min.js" strategy="afterInteractive" />

        {/* Template Main Javascript File */}
        <Script src="/js/main.js" strategy="afterInteractive" />

        {/* Initialization Script from footer.php */}
        <Script id="owl-init" strategy="lazyOnload">
          {`
            $(document).ready(function() {	
                $('.owl-carousel').owlCarousel({
                    loop:true,
                    center: true,
                    autoplay:true,
                    autoplayTimeout:2000,
                    responsive:{
                        0:{ items:1 },
                        600:{ items:3 },
                        1000:{ items:5 }
                    }
                });
                
                var owl = $('.owl-carousel');
                owl.owlCarousel();
                $('.customNextBtn').click(function() {
                    owl.trigger('next.owl.carousel');
                });
                $('.customPrevBtn').click(function() {
                    owl.trigger('prev.owl.carousel', [300]);
                });
            });
          `}
        </Script>
      </body>
    </html>
  );
}
