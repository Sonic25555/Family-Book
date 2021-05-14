var i = 0
function update(){
    i++;
    var number_of_family_members_in_array = 5
    if(i > number_of_family_members_in_array)
{
    i = 0
}
    var updatedImages = images[i];
    var updatedNames = names[i];
    document.getElementById("family_member_image").src = updatedImages;
    document.getElementById("family_member_name").innerHTML = updatedNames;
}
var images =
    ["https://d2e111jq13me73.cloudfront.net/sites/default/files/styles/share_link_image_large/public/blog/csm-blog/familywell-being-blog-03_0.jpg?itok=R9s7KRY1" ,
        "https://i.pinimg.com/736x/0b/37/5f/0b375fb169569a6100a18ecb7d584d0c.jpg" ,
        "https://cdn2.vectorstock.com/i/1000x1000/70/61/dark-skinned-mother-and-baby-vector-23827061.jpg" ,
        "https://artprojectsforkids.org/wp-content/uploads/2021/01/Draw-a-Boy.jpeg" ,
        "https://artprojectsforkids.org/wp-content/uploads/2021/01/Girl.jpeg" ,
    

    ];
    var names = 
    [Family, Arun - Father, Jennifer - Mother, Aaron - Brother / Son, Ayesha - Sister / Daughter
    ]