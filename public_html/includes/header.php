<?php 
include 'config.php';
$page_title = isset($page_title) ? $page_title : SITE_NAME;
$page_description = isset($page_description) ? $page_description : "Welcome to " . SITE_NAME . ", your go-to destination for [your services]. Explore our resources, get expert help, and grow today!";
$page_keywords = isset($page_keywords) ? $page_keywords : "web design, animation, graphic design, digital marketing, Zimbabwe, Rodneytech, PixelPyre";
$page_url = (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? "https" : "http") . "://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="Permissions-Policy" content="accelerometer=(self)">
    <title><?php echo htmlspecialchars($page_title); ?></title>

    <!-- Primary Meta Tags -->
    <meta name="description" content="<?php echo htmlspecialchars($page_description); ?>">
    <meta name="keywords" content="<?php echo htmlspecialchars($page_keywords); ?>">
    <meta name="author" content="Rodneytech Inc.">
    <meta name="robots" content="index, follow">
    <link rel="canonical" href="<?php echo $page_url; ?>">

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:title" content="<?php echo htmlspecialchars($page_title); ?>">
    <meta property="og:description" content="<?php echo htmlspecialchars($page_description); ?>">
    <meta property="og:image" content="https://yourdomain.com/assets/images/preview.jpg"> <!-- Replace with your social preview image -->
    <meta property="og:url" content="<?php echo $page_url; ?>">
    <meta property="og:site_name" content="<?php echo SITE_NAME; ?>">

    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="<?php echo htmlspecialchars($page_title); ?>">
    <meta name="twitter:description" content="<?php echo htmlspecialchars($page_description); ?>">
    <meta name="twitter:image" content="https://yourdomain.com/assets/images/preview.jpg">

    <!-- Favicon -->
    <link rel="icon" type="image/png" href="/assets/images/favicon.ico">

    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    animation: {
                        'float': 'float 6s ease-in-out infinite',
                        'float-reverse': 'float-reverse 5s ease-in-out infinite',
                    },
                    keyframes: {
                        float: {
                            '0%, 100%': { transform: 'translateY(0)' },
                            '50%': { transform: 'translateY(-20px)' },
                        },
                        'float-reverse': {
                            '0%, 100%': { transform: 'translateY(0)' },
                            '50%': { transform: 'translateY(15px)' },
                        }
                    },
                    colors: {
                        primary: {
                            50: '#f0f9ff',
                            100: '#e0f2fe',
                            200: '#bae6fd',
                            300: '#7dd3fc',
                            400: '#38bdf8',
                            500: '#0ea5e9',
                            600: '#0284c7',
                            700: '#0369a1',
                            800: '#075985',
                            900: '#0c4a6e',
                        },
                        dark: {
                            900: '#0a0a0a',
                            800: '#1a1a1a',
                            700: '#2a2a2a',
                        }
                    }
                }
            }
        }
    </script>

    <!-- AOS (Optional Scroll Animation Library) -->
    <!-- <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"> -->

    <!-- Custom CSS -->
    <link rel="stylesheet" href="../assets/css/style.css">

    <!-- Structured Data (Schema.org) -->
    <script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Rodneytech Inc.",
        "url": "https://keith.rodneytechinc.co.zw.com",
        "logo": "https://www.rodneytechinc.co.zw/assets/images/logos/rti_logo_white.png",
        "sameAs": [
            "https://www.facebook.com/rodneytechinc/",
            "https://www.twitter.com/rodneytechinc",
            "https://www.linkedin.com/in/keithrodneytech/"
        ]
    }
    </script>
</head>
<body class="bg-dark-900 text-gray-200 font-sans antialiased">
    <!-- Background Animation -->
    <div class="fixed inset-0 overflow-hidden -z-10">
        <div class="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary-500 opacity-5 blur-3xl animate-float"></div>
        <div class="absolute top-1/3 right-1/4 w-72 h-72 rounded-full bg-primary-400 opacity-5 blur-3xl animate-float-reverse"></div>
        <div class="absolute bottom-1/4 right-1/3 w-56 h-56 rounded-full bg-primary-600 opacity-5 blur-3xl animate-float"></div>
    </div>

    <?php include 'navigation.php'; ?>