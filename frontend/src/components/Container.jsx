const Container = ({ children }) => {
  return (
    <section 
      className="bg-gray-200 shadow-gray-500 shadow-lg md:max-w-[80%] min-h-screen px-10 py-20 mx-auto"
    >
      {children}
    </section>
  )
}

export default Container