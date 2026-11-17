

const Niranjan=({loading,error,data})=>{

if(loading) return<p>{loading}</p>;
if(error) return<p>{error}</p>;
if(!data) return <p>data nahi aya</p>

    return(
        <div>
 <h1>{data}</h1>
        </div>
    );
};
export {Niranjan};
// vvi: Conditional Rendering (if else) ka structure:
// 
// 1. Saari 'if' conditions return ke BAHAR (uper) likhi jati hain.
// 2. Jo condition sabse zyada zaruri ho (jaise login check), use sabse uper rakhein.
// 3. Jo condition sabse kam zaruri ho, use sabse neeche rakhein.
// 4. Agar return ke andar (JSX me) condition lagani ho, to wahan if() nahi chalega. 
//    Wahan Ternary (? :) ya && ka use karna padega.
// 
// Example:
// if (!user) return <Login />; // Sabse uper (Zaruri)
// if (loading) return <Loading />; // Fir loading
// if (error) return <Error />; // Fir error
// 
// return <MainData />; // Sabse aakhir me (Main UI)
