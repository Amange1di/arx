
 const LinkSliderLinks = () => {
    const Links =[
        {
            link: 'название ссылки '
        },
    ]
  return (
    <div>
        {Links.map((item, index) => (
            <div className="link-con" key={index}>
                <a href="" style={{textDecoration: 'none'}}>
                <p style={{color: 'white', }} id='desc-slider-link'> {item.link}</p>
                </a>
            </div>
        ))}
    </div>
  )
}

export  default LinkSliderLinks;