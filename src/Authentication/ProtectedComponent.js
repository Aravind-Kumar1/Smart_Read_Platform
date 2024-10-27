// // App.js
// import ProtectedComponent from './components/ProtectedComponent';

// function App() {
//   return (
//     <AuthProvider>
//       <Router>
//         <ScrollToTop />
//         <Routes>
//           {/* Define your routes */}
//           <Route path="/" element={<Layout><HomePage /></Layout>} />
//           <Route path="/audiobooks" element={<Layout><AudiobooksPage /></Layout>} />
//           <Route path="/audiobook/:id" element={<Layout><AudioBookDetailPage /></Layout>} />
//           <Route path="/book/:id" element={<Layout><BookDetailPage /></Layout>} />
//           <Route path="/ebooks" element={<Layout><EBooksPage /></Layout>} />
//           <Route path="/login" element={<LoginPage />} />
//           <Route path="/signup" element={<SignUpPage />} />

//           {/* Protect the note-taking and favorites routes */}
//           <Route path="/note-taking/:id" element={<Layout><ProtectedComponent><NoteTaking /></ProtectedComponent></Layout>} />
//           <Route path="/favorites" element={<Layout><ProtectedComponent><Favorites /></ProtectedComponent></Layout>} />
//         </Routes>
//       </Router>
//     </AuthProvider>
//   );
// }
