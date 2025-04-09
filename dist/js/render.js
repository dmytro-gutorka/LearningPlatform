export function renderCourses(courses) {
    const container = document.querySelector(".courses__cards");
    if (!container) return;

    container.innerHTML = "";

    if (courses.length === 0) {
        container.innerHTML = `
       <div class="courses__cards-no-results">
        <h3>Sorry, we couldn't find any results</h3>
        <p>Try adjusting your search. Here are some ideas:</p>
        <ul>
            <li>Make sure all words are spelled correctly</li>
            <li>Try different search terms</li>
            <li>Try more general search terms</li>
        </ul>
        </div>`;
        return;
    }

    courses.forEach(course => {
        const div = document.createElement("div");
        div.innerHTML = `
      <article class="courses__card">
        <img class="courses__card-image" src="${course.img}" alt="" width="300" height="300">
        <div class="courses__card-body">
          <h3 class="courses__card-title">${course.title}</h3>
          <p class="courses__card-description"><span class="bold-underline">Description</span>: ${course.description}</p>
          <p class="courses__card-topics"><span class="bold-underline">Related topics:</span>: ${course.topics.join(", ")}</p>
          <p class="courses__card-author"><span class="bold-underline">Instructor</span>: ${course.instructor}</p>
          <p class="courses__card-complexity"><span class="bold-underline">Comlexity</span>: ${course.difficulty}</p>
           <p class="courses__card-rating"><span class="bold-underline">Rating</span>: ${course.rating}</p>
        </div>
        
        
      </article>`;
        container.appendChild(div);
    });
}


export function renderPagination(totalItems, currentPage, perPage, onPageClick) {
    const pagination = document.querySelector(".pagination");
    if (!pagination) return;

    pagination.innerHTML = "";

    const totalPages = Math.ceil(totalItems / perPage);
    if (totalPages <= 1) {
        pagination.style.display = "none";
        return;
    }


    if (currentPage > 1) {
        const prev = document.createElement("button");
        prev.className = "pagination__btn";
        prev.innerHTML = "&laquo;";
        prev.addEventListener("click", () => onPageClick(currentPage - 1));
        pagination.appendChild(prev);
    }


    const maxVisiblePages = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage + 1 < maxVisiblePages) {
        startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    if (startPage > 1) {
        const first = document.createElement("button");
        first.className = "pagination__btn";
        first.textContent = "1";
        first.addEventListener("click", () => onPageClick(1));
        pagination.appendChild(first);

        if (startPage > 2) {
            const dots = document.createElement("span");
            dots.className = "pagination__dots";
            dots.textContent = "...";
            pagination.appendChild(dots);
        }
    }

    for (let i = startPage; i <= endPage; i++) {
        const btn = document.createElement("button");
        btn.className = `pagination__btn ${i === currentPage ? "active" : ""}`;
        btn.textContent = i;
        if (i === currentPage) {
            btn.disabled = true;
        } else {
            btn.addEventListener("click", () => onPageClick(i));
        }
        pagination.appendChild(btn);
    }

    if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
            const dots = document.createElement("span");
            dots.className = "pagination__dots";
            dots.textContent = "...";
            pagination.appendChild(dots);
        }

        const last = document.createElement("button");
        last.className = "pagination__btn";
        last.textContent = totalPages;
        last.addEventListener("click", () => onPageClick(totalPages));
        pagination.appendChild(last);
    }


    if (currentPage < totalPages) {
        const next = document.createElement("button");
        next.className = "pagination__btn";
        next.innerHTML = "&raquo;";
        next.addEventListener("click", () => onPageClick(currentPage + 1));
        pagination.appendChild(next);
    }
}