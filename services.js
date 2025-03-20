const serviceDetails = {
    'network-infrastructure': {
        title: 'Network Infrastructure',
        description: `Our network infrastructure services provide comprehensive solutions for businesses of all sizes. We offer:
        • Network design and architecture planning
        • Implementation of wired and wireless networks
        • Network performance optimization
        • Infrastructure upgrades and modernization
        • Network monitoring and maintenance
        • Scalable solutions for future growth
        • Quality of Service (QoS) implementation
        • Network documentation and topology mapping`,
        benefits: [
            'Improved network reliability and performance',
            'Reduced downtime and maintenance costs',
            'Future-proof infrastructure design',
            'Expert implementation and support'
        ]
    },
    'cybersecurity': {
        title: 'Cybersecurity',
        description: `Protect your business with our comprehensive cybersecurity solutions:
        • Security audits and vulnerability assessments
        • Firewall implementation and management
        • Intrusion detection and prevention systems
        • End-point security solutions
        • Data encryption services
        • Security awareness training
        • Incident response planning
        • Compliance management`,
        benefits: [
            'Enhanced protection against cyber threats',
            'Regulatory compliance assurance',
            '24/7 security monitoring',
            'Rapid incident response and recovery'
        ]
    },
    'cloud-solutions': {
        title: 'Cloud Solutions',
        description: `Transform your business with our cloud services:
        • Cloud migration strategy and execution
        • Hybrid cloud architecture design
        • Cloud optimization and cost management
        • Cloud backup and disaster recovery
        • Multi-cloud environment management
        • Cloud security implementation
        • Performance monitoring and scaling
        • Cloud application deployment`,
        benefits: [
            'Increased business agility',
            'Cost-effective scalability',
            'Enhanced disaster recovery',
            'Improved collaboration capabilities'
        ]
    },
    'it-infrastructure': {
        title: 'IT Infrastructure',
        description: `Comprehensive IT infrastructure solutions tailored to your needs:
        • Server deployment and management
        • Storage solutions and optimization
        • Virtualization services
        • Hardware procurement and setup
        • Infrastructure monitoring
        • Capacity planning
        • Backup and recovery systems
        • Data center solutions`,
        benefits: [
            'Optimized IT operations',
            'Reduced infrastructure costs',
            'Improved system reliability',
            'Scalable infrastructure growth'
        ]
    },
    'it-support': {
        title: 'IT Support',
        description: `Professional IT support services for your business:
        • 24/7 technical support
        • Help desk services
        • Remote and on-site support
        • System maintenance and updates
        • User support and training
        • Hardware troubleshooting
        • Software support
        • Network issue resolution`,
        benefits: [
            'Minimized system downtime',
            'Quick issue resolution',
            'Proactive maintenance',
            'Expert technical assistance'
        ]
    },
    'software-solutions': {
        title: 'Software Solutions',
        description: `Custom software solutions to enhance your business operations:
        • Custom software development
        • Application integration services
        • Software modernization
        • Mobile app development
        • API development and integration
        • Database design and management
        • Quality assurance and testing
        • Software maintenance and updates`,
        benefits: [
            'Streamlined business processes',
            'Improved operational efficiency',
            'Custom-tailored solutions',
            'Ongoing technical support'
        ]
    }
};

function showServiceModal(serviceId) {
    const service = serviceDetails[serviceId];
    const modal = document.createElement('div');
    modal.className = 'service-modal';
    modal.innerHTML = `
        <div class="service-modal-content">
            <span class="close-modal">&times;</span>
            <h2>${service.title}</h2>
            <div class="service-description">
                <p>${service.description}</p>
            </div>
            <div class="service-benefits">
                <h3>Key Benefits</h3>
                <ul>
                    ${service.benefits.map(benefit => `<li>${benefit}</li>`).join('')}
                </ul>
            </div>
        </div>
    `;

    document.body.appendChild(modal);
    
    // Close button functionality
    const closeBtn = modal.querySelector('.close-modal');
    closeBtn.onclick = () => {
        modal.remove();
    };

    // Close on outside click
    modal.onclick = (e) => {
        if (e.target === modal) {
            modal.remove();
        }
    };
}

function showServiceModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';

    // Close when clicking the close button
    const closeBtn = modal.querySelector('.close-modal');
    closeBtn.onclick = function() {
        closeModal(modalId);
    }

    // Close when clicking outside the modal
    window.onclick = function(event) {
        if (event.target == modal) {
            closeModal(modalId);
        }
    }

    // Close when pressing ESC key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closeModal(modalId);
        }
    });
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}
